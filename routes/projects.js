const express = require('express');
const { createProject } = require('../handlers/projects');
const { loginRequiredAuthMiddleware } = require('../authentication/middlewares');
const router = express.Router();



router.post("create-project/", loginRequiredAuthMiddleware, createProject)


module.exports = router