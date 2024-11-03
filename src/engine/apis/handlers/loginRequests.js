const { checkPassword, generateToken } = require("../../utils/utils");
const { loginSchema } = require("../api_schema/schema");

module.exports.loginApi = async (req, res) => {
  const schema = loginSchema;
  const { email, password, formId } = req.body;
  const { projectId } = req.params;
  const apiPublicKey = req.headers["public_auth_key"];
  const user = await project_user.getUser(email);

  const { err, value } = schema.validate(req.body);

  if (err) {
  }

  if (user.is_verified && (await checkPassword(password, user.password))) {
    const { token, expiresIn } = await generateToken(
      user,
      String(apiPublicKey)
    );
    const context = {
      status: "success",
      detail: "User login successfull",
      data: { token: token, expiresIn: expiresIn },
    };
    return res.status(200).json(context);
  }
  return res
    .status(400)
    .json({ status: "failed", detail: "user login unsuccessful", data: null });
};
