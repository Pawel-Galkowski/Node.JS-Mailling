"use strict";
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

async function CustomMailer(gmail, form) {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: gmail.email,
        pass: gmail.password,
      },
    });

    let fullName = form.name + " " + form.surname;
    let mailOptions = {
      to: form.email,
      subject: form.subject,
      html: `<div style="background-color: #F0F0F0; padding: 25px 0; font-size: 15px; font-family: Georgia; line-height: 25px;">
          <div style="max-width: 600px; min-width: 300px: width: auto; margin: 0 auto; text-align: center;">
              <p style="text-align: left;">
                  Sender: ${fullName}<br />

                  ${form.content}<br/><br/>
                  Thanks for using mailer from JoinJobs! <br />See you soon.
              </p>
              <p style="text-align: left;">
                  JoinJobs Team<br />
                  <a href="https://joinjobs.com">https://joinjobs.com</a>
              </p>
          </div>
              </div>`,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) console.log(error);
    });
    return true;
  } catch (err) {
    return err;
  }
}

module.exports = CustomMailer;
