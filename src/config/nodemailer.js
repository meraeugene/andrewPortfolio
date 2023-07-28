import nodemailer from "nodemailer";

const user = process.env.USER;
const pass = process.env.USER_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

export const mailOptions = {
  from: user,
  to: user,
};
