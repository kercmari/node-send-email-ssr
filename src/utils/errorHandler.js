// src/utils/errorHandler.js
/**
 * Middleware para manejar errores en la aplicación.
 *
 * @param {Error} err - Objeto de error que se produjo.
 * @param {Request} req - Objeto de la solicitud.
 * @param {Response} res - Objeto de la respuesta.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Registrar la traza del error para diagnóstico

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Ha ocurrido un error en el servidor';

  res.status(statusCode).json({
    error: {
      message: message,
      statusCode: statusCode,
    },
  });
};

module.exports = errorHandler;
