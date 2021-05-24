// Modulos y Constantes

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const path = require('path');


const validateProductMiddleware = require('../middlewares/validateProductMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const maintenanceMiddleware = require('../middlewares/maintenanceMiddleware');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/'));
    },
    filename: (req, file, callback) => {
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


//router.get('/create', authMiddleware, productsController.create);
router.get('/create', authMiddleware, productsController.create);
router.get('/promotions', maintenanceMiddleware, productsController.promotions);
router.get('/productCart', productsController.productCart);
router.get('/search', productsController.search);
router.get('/:id', productsController.show);
router.post('/create', upload.single('image'),  validateProductMiddleware, productsController.store);
router.get('/:id/edit', authMiddleware, validateProductMiddleware, productsController.edit);
router.put('/:id', upload.single('image'), productsController.update);
router.delete('/:id', authMiddleware, productsController.destroy);
// Rutas de Controller
router.get('/', productsController.index);
//router.get('/productDetail', productsController.productDetail);

//router.get('/abmProducts', productsController.abmProducts);

// Exporta modulo

module.exports = router;