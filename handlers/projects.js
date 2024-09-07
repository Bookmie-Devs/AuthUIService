const { ProjectRepository } = require("../repository/projects")


const project_repo = new ProjectRepository()

module.exports.createProject = async function (req, res) {
    const { project_name } = req.body;
    const user_id = req.user.user_id;
    const project = await project_repo.createProject({ data: { project_name, user_id } });
}


module.exports.deleteProject = async function (req, res) {
    const project_id = req.params.project_id;
    const user_id = req.user.user_id;
    const project = await project_repo.deleteProject(project_id);
    if (project) {
        return
    }
    else {
        return
    }
}