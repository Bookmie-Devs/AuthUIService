
const express = require("express");
const { loginRequiredAuthMiddleware } = require("../authentication/middlewares");
const { getDashboard } = require("../handlers/dashboard");

const router = express.Router();


router.get("", loginRequiredAuthMiddleware, getDashboard);


module.exports = router;