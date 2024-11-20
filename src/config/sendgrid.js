const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // La clave API se configura desde el archivo .env

module.exports = sgMail;
