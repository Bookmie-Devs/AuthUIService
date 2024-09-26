const express = require("express");
const { signUpApi } = require("../handlers/signupRequests");
const { ProjectUserRepository } = require("../../../repository/projects");
const { loginApi } = require("../handlers/loginRequests");
const { apiPublicKeyMiddleware } = require("../middlewares/middlewares");
const router = express.Router();

const project_user = new ProjectUserRepository();

router.post("/:projectId/signup/", apiPublicKeyMiddleware, signUpApi);
router.post("/:projectId/login/", apiPublicKeyMiddleware, loginApi);

module.exports = router;
