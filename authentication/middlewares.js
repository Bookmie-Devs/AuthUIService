const jwt = require('jsonwebtoken')
const { UserRepository } = require('../repository/accounts')
const { SECRET_KEY } = require("../configs/env");

module.exports.loginRequiredAuthMiddleware = async function (req, res, next) {
    try {
        const token = req.cookies.auth_token;
        const decoded = await jwt.verify(token, SECRET_KEY,);
        req.user = decoded;
        next()
    } catch (error) {
        res.redirect("/accounts/login")
    }
}
