const { ProjectUserRepository } = require("../../repository/projects");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET_KEY } = require("../../configs/env");

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
