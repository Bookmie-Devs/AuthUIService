const jwt = require('jsonwebtoken')
const { UserRepository } = require('../repository/accounts')
const { SECRET_KEY } = require("../configs/env");


const user_repo = new UserRepository()

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



module.exports.alreadyLogin = async function (req, res) {
    try {
        const token = req.cookies.auth_token;
        const decoded = await jwt.verify(token, SECRET_KEY,);
        req.user = decoded;
        next()
    } catch (error) {
        res.redirect("/dashboard/")
    }
}