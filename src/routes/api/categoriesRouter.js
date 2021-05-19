// Modulos y Constantes

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/api/categoryController');

// Rutas de API Controller Users
router.get('/', categoriesController.index);
router.get('/:id', categoriesController.show)

module.exports = router;