const { UserRepository } = require("../repository/accounts");
const { ProjectRepository } = require("../repository/projects");
const { writeLogsToFile } = require("../utils/utils");

const project_repo = new ProjectRepository();
const user_repo = new UserRepository();

module.exports.getDashboard = async function (req, res) {
    writeLogsToFile("email.log", req)
    const projects = await project_repo.getProjectsByUser(req.user.user_id)
    const context = { projects, user: req.user }
    res.render("dashboard", context)
}