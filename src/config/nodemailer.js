import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "villalon.andrew123@gmail.com",
    pass: "jouicqoowtdvvwix",
  },
});

export const mailOptions = {
  from: "villalon.andrew123@gmail.com",
  to: "villalon.andrew123@gmail.com",
};
