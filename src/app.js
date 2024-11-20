// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(cors()); // Configurar CORS si es necesario
app.use(express.json());
app.use('/api', emailRoutes);

// Registrar el middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
