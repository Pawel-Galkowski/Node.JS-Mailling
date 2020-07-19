"use strict";
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

async function CustomMailer(gmail, email) {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: gmail.email,
        pass: gmail.password,
      },
    });
    let aUser = user.email;

    jwt.sign((err) => {
      transporter.sendMail({
        to: aUser,
        subject: email.subject,
        html: `<div style="background-color: #F0F0F0; padding: 25px 0; font-size: 15px; font-family: Georgia; line-height: 25px;">
          <div style="max-width: 600px; min-width: 300px: width: auto; margin: 0 auto; text-align: center;">
              <p style="text-align: left;">
                  Sender: ${email.name}<br />
                  ${email.content}
                  Thanks for using mailer from  JoinJobs! <br />See you soon.
              </p>
              <p style="text-align: left;">
                  JoinJobs Team<br />
                  https://joinjobs.com
              </p>
          </div>
              </div>`,
      });
    });
    return true;
  } catch (err) {
    return err;
  }
}

module.exports = CustomMailer;
