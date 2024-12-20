const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");
const crypto = require("crypto");
const { ENCRYPTION_IV, ENCRYPTION_KEY } = require("../configs/contants");
const algorithm = "aes-256-cbc";
const emailTemplates = path.join(__dirname, "email_templates");
const logs = path.join(
  path.dirname(path.dirname(path.join(__dirname))),
  "_logs"
);
const htmlFiles = path.join(
  path.dirname(path.join(__dirname)),
  "public",
  "media",
  "html_files"
);

module.exports.renderWithContext = function (template, context = {}) {
  try {
    const file = fs.readFileSync(`${emailTemplates}/${template}`, "utf-8");
    let html_text = file;
    for (var key in context) {
      html_text = html_text.replace(`{{${key}}}`, context[key]);
    }
    return html_text;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports.extractUsername = function (email) {
  const username = String(email).split("@")[0];
  return username;
};

module.exports.localMediaUrl = function (req, filePath) {
  const filePathArray = String(filePath).split("/");
  // const host = req.hostname;
  return `/${filePathArray[1]}/${filePathArray[2]}`;
};

module.exports.cleanHtml = function (content) {
  let cleaned = content
    .replace(/^\s*'/, "")
    .replace(/'\s*}\s*$/, "")
    .replace(/' \+ /g, "")
    .replace(/\\r\\n/g, "")
    .replace(/\s+/g, " ");

  return cleaned.trim();
};

module.exports.encrypt = function (text) {
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  //   const tag = cipher.getAuthTag();
  return {
    encryptedData: encrypted,
  };
};

module.exports.writeLogsToFile = function (file, data) {
  let context;
  if (typeof data === "object") {
    context = `${JSON.stringify(data)}\n`;
  } else {
    context = String(data);
  }
  fs.appendFileSync(`${logs}/${file}`, context);
};

module.exports.generateApiKey = function () {
  const key = uuid4();
  return key.replace(/-/g, "");
};

// module.exports.encrypt = (project_uuid) =>

module.exports.extractUsername = function (email) {
  const username = String(email).split("@")[0];
  return username;
};

module.exports.localMediaUrl = function (req, filePath) {
  const filePathArray = String(filePath).split("/");
  // const host = req.hostname;
  return `/${filePathArray[1]}/${filePathArray[2]}`;
};

module.exports.readHtmlFile = async function (fileName) {
  const file = htmlFiles + fileName;
  let content;
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    content = data;
  });
  return content;
};

module.exports.cleanHtml = function (content) {
  let cleaned = content
    .replace(/^\s*'/, "")
    .replace(/'\s*}\s*$/, "")
    .replace(/' \+ /g, "")
    .replace(/\\r\\n/g, "")
    .replace(/\s+/g, " ");

  return cleaned.trim();
};

module.exports.encrypt = function (text) {
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  //   const tag = cipher.getAuthTag();
  return {
    encryptedData: encrypted,
  };
};
