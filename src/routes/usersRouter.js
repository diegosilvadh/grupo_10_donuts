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
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Rutas de Controller

router.get('/', usersController.index);
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);
// Perfil de Usuario
router.get('/profile/', usersController.profile)
router.post('/', upload.single('avatar'), usersController.store);
router.get('/:id', usersController.show);
router.get('/:id/edit', usersController.edit);
router.put('/:id', upload.single('avatar'), usersController.update);
router.delete('/:id', usersController.destroy);

// Exporta modulo

module.exports = router;
