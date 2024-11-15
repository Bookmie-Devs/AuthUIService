const { ProjectUserRepository } = require("../../repository/projects");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET_KEY } = require("../../configs/contants");
const fs = require("fs");
const path = require("path");
const scripts = path.join(path.dirname(__dirname), "scripts/");
// const writeLoginLogRepository = require("");
const project_user_repo = new ProjectUserRepository();

module.exports.getRandomCode = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

async function makePassword(rawPassword) {
  const _hash = await bcrypt.hash(rawPassword, parseInt(SALT_ROUNDS));
  return _hash;
}

module.exports.checkPassword = async function (password, hash) {
  const check = await bcrypt.compare(password, hash);
  return check;
};

module.exports.createProjectUser = async function (
  project_id,
  email,
  password,
  is_verified = false
) {
  const hashedPassword = await makePassword(password);
  const project_user = await project_user_repo.insertData(
    project_id,
    email,
    hashedPassword
  );
  return project_user;
};

module.exports.generateToken = async function (user, apiPrivateKey) {
  const expiresIn = "5h";
  const token = jwt.sign(
    {
      user_id: user.id,
      email: user.email,
      username: user.username,
      project_id: user.project_id,
    },
    apiPrivateKey,
    { expiresIn: expiresIn }
  );
  //   updateUserLastLogin(user.user_id);
  return { token, expiresIn };
};

module.exports.writeLoginLog = async function (params) {};

module.exports.writeFormIntoLoginScript = async function (project_uuid) {
  // create new js file
  const uniqueName = "login" + project_uuid + ".js";
  // fetch content from base script;
  const content = fs.readFileSync(scripts + "base_login_script.js", "utf8");

  // write into new js file with html form
  const filePath = scripts + "logins/" + uniqueName;
  const jsScript = content.replace("{{context}}", "");
  fs.writeFileSync(filePath, jsScript);

  return { uniqueName, filePath };
};

module.exports.writeFormIntoSignupScript = async function (project_uuid) {
  // create new js file
  const uniqueName = "signup" + project_uuid + ".js";
  // fetch content from base script;
  const content = fs.readFileSync(scripts + "base_signup_script.js", "utf8");

  const formConext = { action: "" };
  // write into new js file with html form
  const filePath = scripts + "singups/" + uniqueName;
  const jsScript = content.replace("{{context}}", "");
  /* for (var key in formConext) {
    jsScript.replace(`{{${key}}}`, formConext["key"]);
  } */
  fs.writeFileSync(filePath, jsScript);

  return { uniqueName, filePath };
};
