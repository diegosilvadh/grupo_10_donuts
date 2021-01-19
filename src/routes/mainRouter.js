// Modulos y Constantes

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rutas de Controller

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/promotions', mainController.promotions);
router.get('/abmProducts', mainController.abmProducts);

// Exporta modulo

module.exports = router;