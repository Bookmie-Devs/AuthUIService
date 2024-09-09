const express = require('express');
const { createProject, deleteProject, changeProjectStatus, projectSettings } = require('../handlers/projects');
const { loginRequiredAuthMiddleware } = require('../authentication/middlewares');
const router = express.Router();



router.post("/create-project", loginRequiredAuthMiddleware, createProject)
router.get("/delete-project/:project_id/", loginRequiredAuthMiddleware, deleteProject)
router.get("/project-settings/:project_id/", loginRequiredAuthMiddleware, projectSettings)
router.all("/change-project-status/:project_id/", loginRequiredAuthMiddleware, changeProjectStatus)

module.exports = router