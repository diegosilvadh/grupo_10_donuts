// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');

const controller = {
    index: (req, res) => {
        let users = usersTable.all()
        console.log(users);
        res.render('users/index', { 
            title: 'Listado de Usuarios', 
            users      
        });
    },
    register:  (req, res) => {
        res.render('users/register');   
    },
    store: (req, res) => {
        // Generamos el nuevo Usuario
        let user = req.body;

        if (req.file) {
            user.avatar = req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        let userId = usersTable.create(user);
        
        res.redirect('/users/' + userId);
    },
    show: (req, res) => {
        let user = usersTable.find(req.params.id);

        if ( user ) {
            res.render('users/detail', { user });
        } else {
            res.send('No encontré el usuario');
        }
    },

// Controller Users

    login: (req,res) => {
        res.render('users/login');
    },
    

// Controller Products

    productDetail:  (req, res) => {
        res.render('products/productDetail');
},
    productCart:  (req, res) => {
        res.render('products/productCart');
},
    promotions:  (req, res) => {
        res.render('products/promotion');
},
abmProducts:  (req, res) => {
    res.render('products/abmproducts');
},
};

module.exports = controller