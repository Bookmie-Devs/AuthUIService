const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserRepository } = require("../repository/accounts");
const { SALT_ROUNDS, SECRET_KEY } = require("../configs/contants");

const user_repo = new UserRepository();

const getRandomOTP = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.makePassword = async function (params) {
  let _otp = String(getRandomOTP(10000, 99999));
  const _hash = await bcrypt.hash(_otp, parseInt(SALT_ROUNDS));
  return { _otp, _hash };
};

module.exports.checkPassword = async function (otp, hash) {
  const password = otp.trim();
  const check = await bcrypt.compare(password, hash);
  return check;
};

function updateUserLastLogin(user_id) {
  const date = new Date();
  user_repo.updateLastLogin(user_id, date);
}

module.exports.tokenAuth = async function (user) {
  const token = jwt.sign(
    {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "5h" }
  );
  updateUserLastLogin(user.user_id);
  return token;
};

module.exports.logout = async function (res) {
  res.clearCookie("auth_token");
  return res.redirect("/accounts/login/");
};
