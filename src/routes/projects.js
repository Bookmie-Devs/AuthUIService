const express = require("express");
const {
  createProject,
  deleteProject,
  changeProjectStatus,
  projectSettings,
  addLoginForm,
} = require("../handlers/projects");
const {
  loginRequiredAuthMiddleware,
} = require("../authentication/middlewares");
const { displayLoginForms, displaySignUpForms } = require("../handlers/forms");
const router = express.Router();

router.post("/create-project", loginRequiredAuthMiddleware, createProject);
router.get(
  "/delete-project/:project_id/",
  loginRequiredAuthMiddleware,
  deleteProject
);
router.get(
  "/project-settings/:project_id/",
  loginRequiredAuthMiddleware,
  projectSettings
);
router.get(
  "/login-forms/:project_id/",
  loginRequiredAuthMiddleware,
  displayLoginForms
);
router.get(
  "/signup-forms/:project_id/",
  loginRequiredAuthMiddleware,
  displaySignUpForms
);
router.all(
  "/change-project-status/:project_id/",
  loginRequiredAuthMiddleware,
  changeProjectStatus
);
router.post(
  "/select-project-signup-form/",
  loginRequiredAuthMiddleware,
  addLoginForm
);

module.exports = router;
