// Modulos y Constantes

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const maintenanceMiddleware = require('../middlewares/maintenanceMiddleware');

// Rutas de Controller
router.get('/help', maintenanceMiddleware, mainController.help);
router.get('/', mainController.index);


// Exporta modulo

module.exports = router;