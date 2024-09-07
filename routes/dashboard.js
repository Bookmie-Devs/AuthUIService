
const express = require("express");
const { loginRequiredAuthMiddleware } = require("../authentication/middlewares");

const router = express.Router();


router.get("", loginRequiredAuthMiddleware, (req, res) => {
    res.render("dashboard")
});


module.exports = router;