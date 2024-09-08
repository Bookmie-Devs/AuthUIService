const { UserRepository } = require('../repository/accounts')
const { makePassword, checkPassword, tokenAuth, logout } = require('../authentication/auth_backend')
const { SendEmail } = require('../configs/email')

const user_repo = new UserRepository()


module.exports.signUpHandler = async function (req, res) {
    res.render("signup")
}

module.exports.signUpPostHandler = async function (req, res) {
    const { username, email } = req.body
    if (!(username && email)) {
        return res.render("error_message", { "message": "username and email required" })
    }
    try {
        const { _otp, _hash } = await makePassword()
        if (await user_repo.getUser(username)) {
            return res.render("error_message", { "message": `Username ${username} taken` })
        }
        console.log(await user_repo.getUser(username))
        const user = await user_repo.createUser({ data: { username, email, password: _hash } });
        const mail = new SendEmail(email, "OTP Verification", "otp_verification.html", { username: username, otp: _otp })
        mail.send()
        res.set("HX-Redirect", `/accounts/auth/${username}/`)
        return res.sendStatus(200)

    } catch (error) {
        console.error(error)
        return res.render("error_message", { "message": "Signup failed" })
    }
}

module.exports.login = async function (req, res) {
    return res.render("login")
}


module.exports.logout = async function (req, res) {
    return logout(res)
}

module.exports.handleLogin = async function (req, res) {
    const { username } = req.body
    if (!(username)) {
        return res.render("error_message", { "message": "username required" })
    }
    if (!(await user_repo.getUser(username))) {
        return res.render("error_message", { "message": `user does not exists` })
    }
    const { _otp, _hash } = await makePassword();
    const user = await user_repo.setPassword(username, _hash);
    const mail = new SendEmail(user.email, "OTP Verification", "otp_verification.html", { username: username, otp: _otp });
    await mail.send();
    res.set("HX-Redirect", `/accounts/auth/${username}/`);
    return res.sendStatus(200);
}


module.exports.getVerified = async function (req, res) {
    const username = req.params.username
    return res.render("verifyOtp", { username })
}

module.exports.verifyOTP = async function (req, res) {
    const { username, otp } = req.body
    const user = await user_repo.getUserForAuth(username)
    const isAuthenticated = await checkPassword(otp, user.password)
    if (!user) {
        return res.render("error_message", { "message": "user does not exist" })
    }
    if (!isAuthenticated) {
        return res.render("error_message", { "message": "Invalid OTP" })
    }
    const token = await tokenAuth(user);
    res.cookie("auth_token", token, { maxAge: 60 * 60000, httpOnly: true });
    res.set("HX-Redirect", `/dashboard/`);
    return res.sendStatus(200);
}

module.exports.checkUsername = async function (req, res) {
    // check for username availability in real time
    const { username } = req.body
    if ((await user_repo.getUser(username))) {
        return res.render("error_message", { "message": `username ${username} taken` })
    }
}