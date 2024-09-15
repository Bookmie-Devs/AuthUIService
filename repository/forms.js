const { PrismaClient } = require('@prisma/client');
const { loginFormDto } = require('../dtos/forms');

const prisma = new PrismaClient();

class LoginFormRepository {
    constructor(parameters) {
        this.model = prisma.signup_form;
    }

    async getFromById(login_form_id) {
        return await this.model.findUnique({
            where: {
                id: login_form_id
            },
            select: loginFormDto
        })
    }
}

module.exports.LoginFormRepository = LoginFormRepository