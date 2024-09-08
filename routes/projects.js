const express = require('express');
const { createProject, deleteProject, changeProjectStatus } = require('../handlers/projects');
const { loginRequiredAuthMiddleware } = require('../authentication/middlewares');
const router = express.Router();



router.post("/create-project", loginRequiredAuthMiddleware, createProject)
router.get("/delete-project/:project_id/", loginRequiredAuthMiddleware, deleteProject)
router.all("/change-project-status/:project_id/", loginRequiredAuthMiddleware, changeProjectStatus)

module.exports = router