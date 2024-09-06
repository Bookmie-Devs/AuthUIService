const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

class UserRepository {
    constructor(parameters) {
        this.model = prisma.user
    }

    async createUser(data) {
        const user = await this.model.create(data);
        return user
    }
}


module.exports.UserRepository = UserRepository