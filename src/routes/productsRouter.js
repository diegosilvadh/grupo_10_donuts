// Modulos y Constantes

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const path = require('path');

const multer = require('multer');
const validateProductMiddleware = require('../middlewares/validateProductMiddleware');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/'));
    },
    filename: (req, file, callback) => {
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Rutas de Controller
router.get('/', productsController.index);
router.get('/create', productsController.create);
router.get('/promotions', productsController.promotions);
router.get('/:id', productsController.show);
router.post('/', upload.single('image'), validateProductMiddleware, productsController.store);
router.get('/:id/edit', validateProductMiddleware, productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);
router.delete('/:id', productsController.destroy);
//router.get('/productDetail', productsController.productDetail);
//router.get('/productCart', productsController.productCart);
//router.get('/abmProducts', productsController.abmProducts);

// Exporta modulo

module.exports = router;