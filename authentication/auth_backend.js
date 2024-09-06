
const bcrypt = require('bcrypt');
const saltRounds = require("../configs/env").SALT_ROUNDS;


const getRandomOTP = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}


module.exports.makePassword = async function (params) {
    let _otp = String(getRandomOTP(10000, 99999))
    const _hash = await bcrypt.hash(_otp, parseInt(saltRounds))
    console.log(_otp)
    console.log(saltRounds)
    console.log(_hash)
    return { _otp, _hash }
}