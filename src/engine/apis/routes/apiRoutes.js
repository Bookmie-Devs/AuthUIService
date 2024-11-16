const express = require("express");
const { signUpApi } = require("../handlers/signupRequests");
const { ProjectUserRepository } = require("../../../repository/projects");
const { loginApi } = require("../handlers/loginRequests");
const { apiPublicKeyMiddleware } = require("../middlewares/middlewares");
const path = require("path");
const { readHtmlFile } = require("../../../utils/utils");
const router = express.Router();

const project_user = new ProjectUserRepository();

const loginPath = path.join(
  path.dirname(path.dirname(__dirname)),
  "scripts",
  "logins/"
);

router.post("/:projectId/signup/", apiPublicKeyMiddleware, signUpApi);
router.post("/:projectId/login/", apiPublicKeyMiddleware, loginApi);

router.get("/:projectId/login/", (req, res) => {
  try {
    const { projectId } = req.params;
    console.log(projectId);
    const scriptFile = `login${projectId}.js`;
    return res.sendFile(loginPath + scriptFile);
  } catch (error) {
    return res.status(404).setHeader(msg, "no scripts for this project id");
  }
});

module.exports = router;
