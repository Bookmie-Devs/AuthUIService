const { getRandomCode, createProjectUser } = require("../../utils/utils");
const {
  EmailVerificationRepository,
  ProjectUserRepository,
} = require("../../../repository/projects");
const { SendEmail } = require("../../../configs/email");
const { extractUsername } = require("../../utils/utils");
const { signupSchema } = require("../api_schema/schema");

const email_code_repo = new EmailVerificationRepository();
const project_user_repo = new ProjectUserRepository();

module.exports.signUpApi = async function (req, res) {
  const schema = signupSchema;
  const projectId = parseInt(req.params.projectId);
  console.log(projectId);
  const { email, password } = req.body;
  const { err, value } = schema.validate(req.body);
  console.log("working");

  if (err) {
    return res.send(err.details.message);
  }

  const emailCode = await email_code_repo.getEmailCode(email);
  if (emailCode) {
    return res
      .status(409)
      .json({ status: "conflict", detail: "Code sent already", data: null });
  }

  if (await project_user_repo.getUser(email)) {
    return res
      .status(409)
      .json({ status: "conflict", detail: "Email Already Exist", data: null });
  }

  const project_user = await createProjectUser(project_id, email, password);
  if (!project_user) {
    return res.status(400).json({
      status: "conflict",
      detail: "User Registration Failed",
      data: null,
    });
  }
  const code = String(getRandomCode(1000, 9999));
  const data = await email_code_repo.createEmailCode(email, code);

  const username = extractUsername(email);
  const mail = new SendEmail(
    email,
    "Email Verification",
    "projectUserEmail.html",
    { username: username, code: code }
  );
  await mail.send();
  return res.status(200).json({
    status: "success",
    detail: `Verification code sent to ${email}`,
    data: null,
  });
};
