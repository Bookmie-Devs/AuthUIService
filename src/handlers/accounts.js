const { UserRepository, ApiKeyRepository } = require("../repository/accounts");
const {
  makePassword,
  checkPassword,
  tokenAuth,
  logout,
} = require("../authentication/auth_backend");
const crypto = require("crypto");
const { SendEmail } = require("../configs/email");
const { generateApiKey, generatePublicPrivateKeys } = require("../utils/utils");
const { ProjectRepository } = require("../repository/projects");
const { writeFormIntoLoginScript } = require("../engine/utils/utils");

const user_repo = new UserRepository();
const api_key = new ApiKeyRepository();
const project_repo = new ProjectRepository();

module.exports.signUpHandler = async function (req, res) {
  res.render("signup");
};

module.exports.signUpPostHandler = async function (req, res) {
  const { username, email } = req.body;
  if (!(username && email)) {
    return res.render("error_message", {
      message: "username and email required",
      layout: false,
    });
  }
  try {
    const { _otp, _hash } = await makePassword();
    if (await user_repo.getUser(username)) {
      return res.render("error_message", {
        message: `Username ${username} taken`,
        layout: false,
      });
    }
    // for testing
    console.log(_otp);
    const user = await user_repo.createUser({
      data: { username, email, password: _hash },
    });
    const mail = new SendEmail(
      email,
      "OTP Verification",
      "otp_verification.html",
      { username: username, otp: _otp }
    );
    await mail.send();
    res.set("HX-Redirect", `/accounts/auth-user-verification/${username}/`);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.render("error_message", {
      message: "Signup failed",
      layout: false,
    });
  }
};

module.exports.login = async function (req, res) {
  return res.render("login");
};

module.exports.logout = async function (req, res) {
  return logout(res);
};

module.exports.handleLogin = async function (req, res) {
  const { username } = req.body;
  if (!username) {
    return res.render("error_message", { message: "username required" });
  }
  if (!(await user_repo.getUser(username))) {
    return res.render("error_message", {
      message: `user does not exists`,
      layout: false,
    });
  }
  const { _otp, _hash } = await makePassword();
  // for testing
  console.log(_otp);
  const user = await user_repo.setPassword(username, _hash);
  const mail = new SendEmail(
    user.email,
    "OTP Verification",
    "otp_verification.html",
    { username: username, otp: _otp }
  );
  await mail.send();
  res.set("HX-Redirect", `/accounts/auth/${username}/`);
  return res.sendStatus(200);
};

module.exports.getVerified = async function (req, res) {
  const username = req.params.username;
  return res.render("verifyOtp", { username });
};

module.exports.verifyOTP = async function (req, res) {
  const { username, otp } = req.body;
  const user = await user_repo.getUserForAuth(username);
  const isAuthenticated = await checkPassword(otp, user.password);
  if (!user) {
    return res.render("error_message", {
      message: "user does not exist",
      layout: false,
    });
  }
  if (!isAuthenticated) {
    return res.render("error_message", {
      message: "Invalid OTP",
      layout: false,
    });
  }
  const token = await tokenAuth(user);
  res.cookie("auth_token", token, { maxAge: 60 * 60000, httpOnly: true });
  res.set("HX-Redirect", `/dashboard/`);
  return res.sendStatus(200);
};

module.exports.userVerification = async function (req, res) {
  // for first signups so we can create a default project for them
  if (req.method === "POST") {
    const { username, otp } = req.body;
    const user = await user_repo.getUserForAuth(username);
    const isAuthenticated = await checkPassword(otp, user.password);
    if (!user) {
      return res.render("error_message", {
        message: "user does not exist",
        layout: false,
      });
    }
    if (!isAuthenticated) {
      return res.render("error_message", {
        message: "Invalid OTP",
        layout: false,
      });
    }
    const project = await project_repo.createProject(
      `${String(username).toUpperCase()}.com Project (default)`,
      user.user_id
    );
    //  write login script for  project
    await writeFormIntoLoginScript(project.project_uuid);

    let key = generateApiKey();

    while (await api_key.isKeyExist(key)) {
      // if key exist assign a new key
      key = generateApiKey();
    }

    await api_key.createKey(user.user_id, key);
    const token = await tokenAuth(user);
    res.cookie("auth_token", token, { maxAge: 60 * 60000, httpOnly: true });
    res.set("HX-Redirect", `/dashboard/`);
    return res.sendStatus(200);
  }
  const username = req.params.username;
  return res.render("user_first_verification", { username });
};

module.exports.checkUsername = async function (req, res) {
  // check for username availability in real time
  const { username } = req.body;
  if (await user_repo.getUser(username)) {
    return res.render("error_message", {
      message: `username ${username} taken`,
      layout: false,
    });
  }
};

module.exports.userSettings = async function (req, res) {
  const username = req.user.username;
  const user = await user_repo.getUser(username);
  const apiKey = await api_key.getKey(user.user_id);
  console.log(apiKey);
  console.log(user);

  return res.render("user_settings", { user, apiKey });
};

module.exports.getApiKey = async function (req, res) {
  const userId = req.user.user_id;
  const username = req.user.username;
  console.log(username);
  const user = await user_repo.getUser(username);

  const { p, pu } = crypto.generateKeyPairSync("rsa");

  let key = generateApiKey();
  user_key = await api_key.getKey(userId);
  if (user_key) {
    return res.redirect("/accounts/user-settings");
  }
  while (await api_key.isKeyExist(key)) {
    // if key exist assign a new key
    key = generateApiKey();
  }
  const newKey = await api_key.createKey(userId, key);
  return res.redirect("/accounts/user-settings");
};
