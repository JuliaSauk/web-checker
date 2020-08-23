import nodemailer from 'nodemailer';

const receiver = 'sauk.julia@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'emailnotifier666@gmail.com', // generated ethereal user
    pass: 'TempPass1', // generated ethereal password
  },
});

export const notify = (buffer) => {
  const messageData = {
    from: 'Email notifier',
    to: receiver,
    priority: 'high',
    subject: `OINP web page was changed: ${new Date()}`,
    html: `
      <html>
          <body>
              <p>OINP web page was changed, 
                  <a href="https://www.youtube.com/">take a look!</a>
              </p>
          </body>
      </html>
    `,
    attachments: [
      {
        filename: 'Snapshot.png',
        content: buffer.toString('base64'),
        encoding: 'base64'
      }
    ]
  };

  return transporter.sendMail(messageData);
};