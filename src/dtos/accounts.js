module.exports.userDto = {
  user_id: true,
  email: true,
  username: true,
};

module.exports.authDto = {
  email: true,
  username: true,
  user_id: true,
  password: true,
};

module.exports.apiKeyDto = {
  id: true,
  api_secret_key: true,
  user_id: true,
  created_at: true,
  last_updated: true,
};
