const { PrismaClient } = require('@prisma/client');
const { listProjectsDto } = require('../dtos/projects')
const prisma = new PrismaClient()

class ProjectRepository {
    constructor(parameters) {
        this.model = prisma.project
    }

    async createProject(project_name, user_id) {
        const project = await this.model.create({ data: { project_name, user_id } });
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
                id: parseInt(project_id)
            },
        })
        return project
    }

    async deleteProject(project_id) {
        const project = await this.model.delete({
            where: {
                id: parseInt(project_id)
            }
        })
        return project
    }


    async changeProjectStatus(project_id, status) {
        const project = await this.model.update({
            where: {
                id: parseInt(project_id)
            },
            data: {
                active: status
            }
        })
        return project
    }
}


module.exports.ProjectRepository = ProjectRepository