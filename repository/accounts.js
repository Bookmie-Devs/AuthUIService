const { PrismaClient } = require('@prisma/client');
const { userDto, authDto } = require('../dtos/accounts')
const prisma = new PrismaClient()

class UserRepository {
    constructor(parameters) {
        this.model = prisma.user
    }

    async createUser(data) {
        const user = await this.model.create(data);
        return user
    }

    async getUser(username) {
        const user = await this.model.findUnique({
            where: {
                username: username
            },
            select: userDto
        })
        return user
    }

    async setPassword(password) {
        const user = this.model.update()
        return user
    }

    async getUserForAuth(username) {
        const user = await this.model.findUnique({
            where: {
                username: username
            },
            select: authDto
        })
        return user
    }
}

module.exports.UserRepository = UserRepository
