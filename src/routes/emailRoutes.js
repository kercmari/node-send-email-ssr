// src/routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Definición de la ruta POST para enviar correos
router.post('/send-email', emailController.sendTemplateEmail);

module.exports = router;
