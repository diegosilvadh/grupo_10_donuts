// Modulos y Constantes

const { Router } = require('express');
const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/userController');

// Rutas de API Controller Users
router.get('/', usersController.index);
router.get('/:id', usersController.show)

module.exports = router;