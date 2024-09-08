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

    async updateLastLogin(user_id, date) {
        const user = await this.model.update({
            where: {
                user_id: user_id
            },
            data: {
                last_login: date
            },
            select: userDto
        })
        return user
    }

    async setPassword(username, password) {
        const user = await this.model.update({
            data: { password: password },
            where: {
                username: username
            },
            select: authDto
        })
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
