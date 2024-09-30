const { PrismaClient } = require("@prisma/client");
const { loginFormDto } = require("../dtos/forms");
const { localMediaUrl } = require("../utils/utils");

const prisma = new PrismaClient();

class LoginFormRepository {
  constructor(parameters) {
    this.model = prisma.login_form;
  }

  async getFromById(login_form_id) {
    return await this.model.findUnique({
      where: {
        id: login_form_id,
      },
      select: loginFormDto,
    });
  }

  async getAllForms() {
    const forms = await this.model.findMany({
      select: {
        title: true,
        description: true,
        preview_image: true,
      },
    });
    const parsedForms = forms.map((form) => {
      return {
        title: form.title,
        description: form.description,
        preview_image: localMediaUrl(null, form.preview_image),
      };
    });
    return parsedForms;
  }

  async addForm(title, description, preview_image, file_content) {
    return await this.model.create({
      data: {
        title: title,
        description: description,
        preview_image: preview_image,
        file_content: file_content,
      },
    });
  }
}

module.exports.LoginFormRepository = LoginFormRepository;
