const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");

const emailTemplates = path.join(__dirname, "email_templates");
const logs = path.join(path.dirname(path.join(__dirname)), "_logs");

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
  return key;
};
