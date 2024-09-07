const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { UserRepository } = require('../repository/accounts')
const { SALT_ROUNDS, SECRET_KEY } = require("../configs/env");

const user_repo = new UserRepository()

const getRandomOTP = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}


module.exports.makePassword = async function (params) {
    let _otp = String(getRandomOTP(10000, 99999))
    const _hash = await bcrypt.hash(_otp, parseInt(SALT_ROUNDS))
    console.log(_otp)
    console.log(SALT_ROUNDS)
    console.log(_hash)
    return { _otp, _hash }
}


module.exports.checkPassword = async function (otp, hash) {
    const password = otp.trim()
    const check = await bcrypt.compare(password, hash)
    return check
}


module.exports.tokenAuth = async function (user) {
    const token = jwt.sign({
        user_id: user.user_id,
        email: user.email,
    },
        SECRET_KEY,
        { expiresIn: "1h" }
    )
    return token;
}
