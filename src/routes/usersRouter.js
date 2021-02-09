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

router.get('/login', usersController.login);
router.get('/register', usersController.register);

// Exporta modulo

module.exports = router;