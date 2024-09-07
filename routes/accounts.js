const express = require("express");
const router = express.Router();
const { signUpHandler, getVerified, login, handleLogin, signUpPostHandler, verifyOTP, checkUsername } = require("../handlers/accounts")


router.get("/signup", signUpHandler);

router.post("/signup", signUpPostHandler);

router.get("/login", login);

router.post("/login", handleLogin);

router.get("/auth/:username/", getVerified);

router.post("/auth/", verifyOTP);

router.post("/check-username/", checkUsername);

module.exports = router;