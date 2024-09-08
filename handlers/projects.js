const { ProjectRepository } = require("../repository/projects")


const project_repo = new ProjectRepository()

module.exports.createProject = async function (req, res) {
    const { project_name } = req.body;
    const user_id = req.user.user_id;
    const project = await project_repo.createProject(project_name.toUpperCase(), user_id);
    if (!project) {
        return res.render("error_message", { "message": `error occured` })
    }
    res.set("HX-Redirect", `/dashboard/`);
    return res.sendStatus(200);
    // return res.render("info_message", { "message": `Project Created` })
}

module.exports.changeProjectStatus = async function (req, res) {
    const project_id = req.params.project_id;
    const project = await project_repo.getProject(project_id)
    if (project.active) {
        await project_repo.changeProjectStatus(project_id, false)
        return res.redirect("/dashboard")
    }
    await project_repo.changeProjectStatus(project_id, true)
    return res.redirect("/dashboard")
}

module.exports.deleteProject = async function (req, res) {
    const project_id = req.params.project_id;
    const user_id = req.user.user_id;
    const project = await project_repo.deleteProject(project_id);
    return res.redirect("/dashboard")
}