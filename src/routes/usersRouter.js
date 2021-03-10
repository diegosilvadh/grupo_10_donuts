// Modulos y Constantes

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require('path');

//Preparamos multer

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Rutas de Controller

router.get('/', usersController.index);
router.get('/register', usersController.register);
router.post('/', upload.single('avatar'), usersController.store);
router.get('/:id', usersController.show);
router.get('/login', usersController.login);

//router.get('/create', productsController.create);


//router.get('/:id/edit', productsController.edit);
//router.put('/:id', upload.single('images'), productsController.update);
//router.delete('/:id', productsController.destroy);

// Exporta modulo

module.exports = router;
