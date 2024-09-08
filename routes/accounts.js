const express = require("express");
const router = express.Router();
const { signUpHandler, getVerified, login, handleLogin, signUpPostHandler, verifyOTP, checkUsername, logout } = require("../handlers/accounts");
const { alreadyLogin } = require("../authentication/middlewares");


router.get("/signup", signUpHandler);

router.post("/signup", signUpPostHandler);

router.get("/login", login);

router.get("/logout", logout);

router.post("/login", handleLogin);

router.get("/auth/:username/", getVerified);

router.post("/auth/", verifyOTP);

router.post("/check-username/", checkUsername);

module.exports = router;