import nodemailer from 'nodemailer'

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: email,
    pass: pass
  },
});

export const attemptSend = async (data: any) => {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: 'Request',
      html: `<h1>Portfolio request message:</h1>
        <h3>From: ${data.name}</h1>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.msg}</p>
        `,
    });
    return true;
  } catch (error) {
    return false;
  }
}

const mailOptions = {
  from: "'Portfolio' notifier.portfolio@outlook.com",
  to: "vijoh01@gmail.com",
  subject: "Image test",
  html: `
    <h1>Hello world</h1>
    <p>Here's an image for you</p>`,
};