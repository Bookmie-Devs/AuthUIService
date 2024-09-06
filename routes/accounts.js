const express = require("express");
const router = express.Router();
const { signUpHandler, signUpPostHandler, verifyOTP } = require("../handlers/accounts")


router.get("/signup", signUpHandler);

router.post("/signup", signUpPostHandler);

router.get("/auth/:username/", verifyOTP);

router.post("/auth/:username/", verifyOTP);

module.exports = router;