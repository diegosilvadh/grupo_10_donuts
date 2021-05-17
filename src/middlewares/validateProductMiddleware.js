const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({ min: 5, max:200 }).withMessage('El nombre debe ser de al menos 5 caracteres'),
    body('price')
        .notEmpty().withMessage('Debes ingresar un precio').bail(),
    body('discount')
        .notEmpty().withMessage('Debes ingresar si tiene descuento').bail(),
    body('description')
        .notEmpty().withMessage('Debes ingresar una descripción').bail()
        .isLength({ min: 20, max:200 }).withMessage('La descripción debe ser de al menos 20 caracteres'),
    body('image').custom((value, { req }) => {
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
]