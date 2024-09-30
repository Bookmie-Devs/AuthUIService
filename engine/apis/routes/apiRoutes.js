const express = require("express");
const { signUpApi } = require("../handlers/signupRequests");
const { ProjectUserRepository } = require("../../../repository/projects");
const { loginApi } = require("../handlers/loginRequests");
const { apiPublicKeyMiddleware } = require("../middlewares/middlewares");
const path = require("path");
const router = express.Router();

const project_user = new ProjectUserRepository();

const loginPath = path.join(path.dirname(path.dirname(__dirname)), "scripts/");

router.post("/:projectId/signup/", apiPublicKeyMiddleware, signUpApi);
router.post("/:projectId/login/", apiPublicKeyMiddleware, loginApi);

router.get("/:project_id/login/", (req, res) => {
  console.log(loginPath);
  return res.sendFile(loginPath + "login_script.js");
});

module.exports = router;
