const { UserRepository } = require('../repository/accounts')
const { makePassword } = require('../authentication/auth_backend')

const user_repo = new UserRepository()


module.exports.signUpHandler = async function (req, res) {
    res.render("signup")
}

module.exports.signUpPostHandler = async function (req, res) {
    const { username, email } = req.body
    try {
        const { _otp, _hash } = await makePassword()
        const user = await user_repo.createUser({ data: { username, email, password: _hash } });
        res.set("HX-Redirect", `/accounts/auth/${username}/`)
        return res.redirect(`/accounts/auth/${username}/`)
    } catch (error) {
        console.error(error)
        return res.render("error_message", { "message": "Signup failed" })
    }

}


module.exports.verifyOTP = async function (req, res) {
    const username = req.params.username
    const { otp } = req.body
    return res.render("verifyOtp")
}