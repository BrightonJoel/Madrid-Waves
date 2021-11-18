module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        service: "Gmail",
        auth: {
          user: "madridwaves1902@gmail.com",
          pass: "hala@5995mad",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'madridwaves1902@gmail.com',
        defaultReplyTo: 'madridwaves1902@gmail.com',
      },
    },
  });