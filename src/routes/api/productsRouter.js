// Modulos y Constantes

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productController');

// Rutas de Controller
router.get('/', productsController.index);

module.exports = router;