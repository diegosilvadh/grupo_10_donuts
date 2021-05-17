// Modulos y Constantes

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const path = require('path');

const multer = require('multer');
const validateProductCreateMiddleware = require('../middlewares/validateProductCreateMiddleware');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Rutas de Controller
router.get('/', productsController.index);
router.get('/create', productsController.create);
router.get('/promotions', productsController.promotions);
router.get('/:id', productsController.show);
router.post('/', upload.single('image'), validateProductCreateMiddleware, productsController.store);
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);
router.delete('/:id', productsController.destroy);
//router.get('/productDetail', productsController.productDetail);
//router.get('/productCart', productsController.productCart);
//router.get('/abmProducts', productsController.abmProducts);

//Rutas de Formulario 

//router.get('/', productsController.index);
//router.get('/create', productsController.create); // Muestra formulario de creación
//router.get('/:id', productsController.show);
//router.post('/', upload.single('image'), productsController.store); // Procesa el formulario de creación
//router.get('/:id/edit', productsController.edit);
//router.put('/:id', upload.single('image'), productsController.update);
//router.delete('/:id', productsController.destroy);

// Exporta modulo

module.exports = router;