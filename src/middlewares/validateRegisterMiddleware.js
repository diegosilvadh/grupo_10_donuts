const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('first_name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({ min: 2, max:200 }).withMessage('El nombre debe ser de al menos 2 caracteres'),
    body('last_name')
        .notEmpty().withMessage('Debes ingresar un apellido').bail()
        .isLength({ min: 2, max:200 }).withMessage('El apellido debe ser de al menos 2 caracteres'),
    body('username')
        .notEmpty().withMessage('Debes ingresar tu username')
        .isLength({ min: 2, max:200 }).withMessage('El username debe ser de al menos 2 caracteres'),
    body('birthday').notEmpty().withMessage('Debes ingresar tu fecha de nacimiento'),
    body('email')
        .notEmpty().withMessage('Debes ingresar tu dirección de correo').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Debes ingresar tu contraseña')
        .isLength({ min: 8, max:200 }).withMessage('El password debe ser de al menos 2 caracteres').bail()
        .isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('No cumple con los requisitos'),
    body('avatar').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    
            if (!file) {
                throw new Error('Tienes que subir una imágen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
    
            return true;
        }),
    body('confirm-password').notEmpty().withMessage('Debes ingresar tu contraseña. Debe conincidir con la ya ingresada'),
]