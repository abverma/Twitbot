const nodemailer = require('nodemailer');
const config = require('./config');

const smtpConfig = config.smtp_config;
const mailOptions = config.mail_options;

let transporter = nodemailer.createTransport(smtpConfig);

let send = (msg) => {
	mailOptions.text = msg;
	// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}

module.exports = {
	send: send
};

console.log('mailer loaded...');