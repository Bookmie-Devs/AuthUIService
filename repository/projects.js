const { PrismaClient } = require("@prisma/client");
const { listProjectsDto } = require("../dtos/projects");
const prisma = new PrismaClient();

class ProjectRepository {
  constructor(parameters) {
    this.model = prisma.project;
  }

  async createProject(project_name, user_id) {
    const project = await this.model.create({
      data: { project_name, user_id },
    });
    return project;
  }

  async getProjectsByUser(user_id) {
    const projects = this.model.findMany({
      where: {
        user_id: user_id,
      },
      select: listProjectsDto,
    });
    return projects;
  }

  async getProjectByUserAndId(user_id, project_name) {
    const project = await this.model.findFirst({
      where: {
        project_name: project_name,
        user_id: parseInt(user_id),
      },
    });
    return project;
  }

  async getProject(project_id) {
    const project = await this.model.findUnique({
      where: {
        id: parseInt(project_id),
      },
    });
    return project;
  }

  async updateProjectLoginForm(project_id, form) {
    const project = await this.model.update({
      where: {
        id: project_id,
      },
      data: {
        login_form_id: form,
      },
    });
  }

  async updateProjectSignUpForm(project_id, form) {
    const project = await this.model.update({
      where: {
        id: project_id,
      },
      data: {
        signup_form_id: form,
      },
    });
    return project;
  }

  async deleteProject(project_id) {
    const project = await this.model.delete({
      where: {
        id: parseInt(project_id),
      },
    });
    return project;
  }

  async changeProjectStatus(project_id, status) {
    const project = await this.model.update({
      where: {
        id: parseInt(project_id),
      },
      data: {
        active: status,
      },
    });
    return project;
  }
}

module.exports.ProjectRepository = ProjectRepository;

class EmailVerificationRepository {
  constructor() {
    this.model = prisma.email_verification_codes;
  }

  async createEmailCode(email, code) {
    const ecode = await this.model.create({
      data: {
        email: email,
        code: code,
      },
    });
    return ecode;
  }

  async getEmailCode(email) {
    try {
      const emailCode = await this.model.findUnique({
        where: {
          email: email,
        },
      });
      return emailCode;
    } catch (error) {
      return null;
    }
  }
}

module.exports.EmailVerificationRepository = EmailVerificationRepository;

class ProjectUserRepository {
  constructor(parameters) {
    this.model = prisma.project_user;
  }

  async getUser(email) {
    const user = await this.model.findFirst({ where: { email: email } });
    return user;
  }

  async insertData(project_id, email, password) {
    const data = await this.model.create({
      data: { project_id: project_id, email: email, password: password },
    });
    return data;
  }

  async updateUserStatus(is_verified) {
    const data = await this.model.update({
      data: {
        is_verified: is_verified,
      },
    });
    return data;
  }
}

module.exports.ProjectUserRepository = ProjectUserRepository;

class LoginFormDataRepository {
  constructor(parameters) {
    this.model = prisma.login_data;
  }

  async insertFormData() {
    const data = await this.model.create({});
  }
}

module.exports.LoginFormDataRepository = LoginFormDataRepository;
