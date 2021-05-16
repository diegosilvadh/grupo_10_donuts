const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('email')
        .notEmpty().withMessage('Debes ingresar tu dirección de correo').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Debes ingresar tu contraseña')
        .isLength({ min: 8, max:200 }).withMessage('El password debe ser de al menos 8 caracteres'),
]