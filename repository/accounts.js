const { PrismaClient } = require("@prisma/client");
const { userDto, authDto, apiKeyDto } = require("../dtos/accounts");
const prisma = new PrismaClient();

class UserRepository {
  constructor(parameters) {
    this.model = prisma.user;
  }

  async createUser(data) {
    const user = await this.model.create(data);
    return user;
  }

  async getUser(username) {
    const user = await this.model.findUnique({
      where: {
        username: username,
      },
      select: userDto,
    });
    return user;
  }

  async updateLastLogin(user_id, date) {
    const user = await this.model.update({
      where: {
        user_id: user_id,
      },
      data: {
        last_login: date,
      },
      select: userDto,
    });
    return user;
  }

  async setPassword(username, password) {
    const user = await this.model.update({
      data: { password: password },
      where: {
        username: username,
      },
      select: authDto,
    });
    return user;
  }

  async getUserForAuth(username) {
    const user = await this.model.findUnique({
      where: {
        username: username,
      },
      select: authDto,
    });
    return user;
  }
}

module.exports.UserRepository = UserRepository;

class ApiKeyRepository {
  constructor(parameters) {
    this.model = prisma.api_key;
  }

  async createKey(user_id, apiSecretKey) {
    const apiKey = await this.model.create({
      data: {
        user_id: user_id,
        api_secret_key: apiSecretKey,
      },
      select: apiKeyDto,
    });
    return apiKey;
  }

  async getKey(user_id) {
    const key = await this.model.findFirst({
      where: {
        user_id: user_id,
      },
      select: apiKeyDto,
    });
    return key;
  }

  async isKeyExist(key_value) {
    const key = await this.model.findUnique({
      where: {
        api_secret_key: key_value,
      },
      select: apiKeyDto,
    });
    return key;
  }
}

module.exports.ApiKeyRepository = ApiKeyRepository;
