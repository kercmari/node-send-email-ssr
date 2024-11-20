// src/controllers/emailController.js
const emailService = require('../services/emailService');

/**
 * Controlador para enviar un correo electrónico.
 * @param {Request} req - Solicitud HTTP que contiene el correo y el contenido HTML.
 * @param {Response} res - Respuesta HTTP.
 */
exports.sendTemplateEmail = async (req, res, next) => {
  const { email, htmlContent } = req.body;

  if (!email || !htmlContent) {
    return res.status(400).send({ error: 'Se requiere el email del destinatario y el contenido HTML.' });
  }

  try {
    const response  = await emailService.sendEmail(email, htmlContent);
    console.log('Correo enviado con éxito a:', response);
    res.status(response.response? "200":"500").send({ message:response.response?? "Correo existoso"});
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};
