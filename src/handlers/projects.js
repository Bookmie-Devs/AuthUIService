const {
  writeFormIntoLoginScript,
  writeFormIntoSignupScript,
} = require("../engine/utils/utils");
const { ApiKeyRepository, UserRepository } = require("../repository/accounts");
const { LoginFormRepository } = require("../repository/forms");
const { ProjectRepository } = require("../repository/projects");
const { encryptWithPublicKey } = require("../utils/utils");
const { login } = require("./accounts");

const project_repo = new ProjectRepository();
const login_form_repo = new LoginFormRepository();
const user_repo = new UserRepository();
const api_key = new ApiKeyRepository();

module.exports.createProject = async function (req, res) {
  const { project_name } = req.body;
  const user_id = req.user.user_id;
  const project = await project_repo.getProjectByUserAndId(
    user_id,
    project_name.toUpperCase()
  );

  if (project) {
    return res.render("error_message", {
      message: `project name already exists`,
      layout: false,
    });
  }

  const newProject = await project_repo.createProject(
    project_name.toUpperCase(),
    user_id
  );
  if (!newProject) {
    return res.render("error_message", { message: `error occured` });
  }

  await writeFormIntoLoginScript(
    newProject.project_uuid,
    newProject.project_name
  );
  await writeFormIntoSignupScript(newProject.project_uuid);
  res.set("HX-Redirect", `/projects/project-settings/${newProject.id}/`);
  return res.sendStatus(200);
  // return res.render("info_message", { "message": `Project Created` })
};

module.exports.changeProjectStatus = async function (req, res) {
  const project_id = req.params.project_id;
  const project = await project_repo.getProject(project_id);
  if (project.active) {
    await project_repo.changeProjectStatus(project_id, false);
    return res.redirect("/dashboard");
  }
  await project_repo.changeProjectStatus(project_id, true);
  return res.redirect("/dashboard");
};

module.exports.deleteProject = async function (req, res) {
  const project_id = req.params.project_id;
  const user_id = req.user.user_id;
  const project = await project_repo.deleteProject(project_id);
  return res.redirect("/dashboard");
};

module.exports.projectSettings = async function (req, res) {
  const project_id = req.params.project_id;
  const username = req.user.username;
  const user = await user_repo.getUser(username);
  // const apiKey = await api_key.getKey(user.user_id);
  const project = await project_repo.getProject(project_id);

  res.render("project_settings", {
    project,
    loginScript: `<script src="https://${req.hostname}/client/${project.project_uuid}/login/"></script>`,
    signupScript: `<script src="https://${req.hostname}/client/${project.project_uuid}/signup/"></script>`,
  });
};

module.exports.addLoginForm = async function (req, res) {
  const LS = req.body;
  // const form = login_form_repo.getFromById(login_form_id);
  // const project = await project_repo.updateProjectLoginForm(
  //   project_id,
  //   login_form_id
  // );
  console.log(LS);
  // return res.redirect(`/project-settings/${project_id}/`);
};

module.exports.addSignUpForm -
  async function (req, res) {
    const { signup_form_id, project_id } = req.body;
    return "";
  };
