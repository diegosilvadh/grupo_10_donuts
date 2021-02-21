// Modulos y Constantes

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rutas de Controller

router.get('/', mainController.index);

// Exporta modulo

module.exports = router;