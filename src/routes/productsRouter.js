// Modulos y Constantes

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas de Controller

router.get('/', productsController.index);
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);
router.get('/promotions', productsController.promotions);
router.get('/abmProducts', productsController.abmProducts);

// Exporta modulo

module.exports = router;