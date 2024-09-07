const { PrismaClient } = require('@prisma/client');
const { listProjectsDto } = require('../dtos/projects')
const prisma = new PrismaClient()

class ProjectRepository {
    constructor(parameters) {
        this.model = prisma.project
    }

    async createProject(data) {
        const project = await this.model.create(data);
        return project
    }

    async getProjectsByUser(user_id) {
        const projects = this.model.findMany({
            where: {
                user_id: user_id
            },
            select: listProjectsDto
        })
        return projects
    }

    async getProject(project_id) {
        const project = await this.model.findUnique({
            where: {
                id: project_id
            },
        })
        return project
    }

    async deleteProject(project_id) {
        const project = this.model.delete({
            where: {
                id: project_id
            }
        })
        if (project == null) {
            return true
        }
        return false
    }
}


module.exports.ProjectRepository = ProjectRepository