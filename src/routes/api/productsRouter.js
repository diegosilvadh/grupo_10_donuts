// Modulos y Constantes

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productController');

// Rutas de API Controller Products
router.get('/', productsController.index);
router.get('/:id', productsController.show)

module.exports = router;