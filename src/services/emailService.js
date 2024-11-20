// src/services/emailService.js
const nodemailer = require('nodemailer');

/**
 * Configurar el transporte SMTP de Nodemailer con los detalles de Resend.
 */
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true, // true para puertos 465, false para otros puertos
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY,
  },
});

/**
 * Servicio para enviar correos electrónicos utilizando Nodemailer con Resend SMTP.
 * @param {string} toEmail - Dirección de correo del destinatario.
 * @param {string} htmlContent - Contenido HTML del correo electrónico.
 */
exports.sendEmail = async (toEmail, htmlContent) => {
  try {
    console.log('Enviando correo a:', toEmail, htmlContent);
    toEmail = "trabajosiafast@gmail.com";
    const info = await transporter.sendMail({
      from: 'onboarding@resend.dev', // Debe ser un remitente verificado en Resend
      to: toEmail,
      subject: 'Nuevo formulario enviado',
      html: htmlContent,
    });
    
    console.log('Correo enviado: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
};
