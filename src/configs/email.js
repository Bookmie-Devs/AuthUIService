const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_USER_PASSWORD } = require("./contants");
const { renderWithContext, writeLogsToFile } = require("../utils/utils");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_USER_PASSWORD,
  },
});

class SendEmail {
  constructor(to, subject, html_template, data = {}) {
    this._htmlMessage = renderWithContext(html_template, data);
    this.from = EMAIL_USER;
    this.transporter = transporter;
    this.mailOptions = {
      from: this.from,
      to: to,
      subject: subject,
      html: this._htmlMessage,
    };
  }

  async send() {
    this.transporter.sendMail(this.mailOptions, async function (err, info) {
      if (err) {
        await writeLogsToFile(
          "email.log",
          `ERROR: ${err} Time:${new Date()}\n`
        );
        console.log(err);
      } else {
        await writeLogsToFile("email.log", info);
        console.log("email success");
      }
    });
  }
}

module.exports.SendEmail = SendEmail;
