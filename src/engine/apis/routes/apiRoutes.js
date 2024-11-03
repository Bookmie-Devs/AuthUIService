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

router.get("/:project_id/login/", (req, res) => {
  console.log(loginPath);
  // const htmlContent = readHtmlFile("");
  return res.sendFile(loginPath + "login1728739713297.js");
});

router.get("/auth-ui-tailwind-css/", (req, res) => {
  const snippet = `<script src="https://cdn.tailwindcss.com"></script>`;
  return res.type("js").send(snippet);
});

module.exports = router;
