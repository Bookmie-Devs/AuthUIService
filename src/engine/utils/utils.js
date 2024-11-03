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

const test_form = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div
      id="modal"
      style="
        display: inline;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-width: 20px;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      "
    >
      <div
        style="
          background-color: rgb(224, 224, 224);
          margin: 15% auto;
          border-radius: 20px;
          padding: 10px;
          border: 1px solid #888;
          width: 80%;
        "
      >
        <button
          onclick="document.getElementById('form-div').style.display='none'"
          id="close"
          style="
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            border: none;
            cursor: pointer;
          "
        >
          &times;
        </button>
        <h3
          style="
            text-align: center;
            font-family: monospace;
            text-decoration: underline;
          "
        >
          <a style="text-decoration: none; color: #141727" href="">
            AuthUi Service
          </a>
        </h3>
        <form id="auth-ui-form" method="POST" action="127.0.0.1:8000/login/">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </body>
</html>`;

module.exports.writeFormIntoLoginScript = async function (form_content) {
  // create new js file
  const uniqueName = "login" + Date.now() + ".js";
  // fetch content from base script;
  const content = fs.readFileSync(scripts + "base_login_script.js", "utf8");

  // write into new js file with html form
  const filePath = scripts + "logins/" + uniqueName;
  const jsScript = content.replace("{{context}}", test_form);
  fs.writeFileSync(filePath, jsScript);

  return { uniqueName, filePath };
};
