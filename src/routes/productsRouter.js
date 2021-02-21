// Modulos y Constantes

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas de Controller
router.get('/', productsController.index);
router.get('/create', productsController.create);
router.get('/:id', productsController.show);
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);
router.get('/promotions', productsController.promotions);
router.get('/abmProducts', productsController.abmProducts);

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