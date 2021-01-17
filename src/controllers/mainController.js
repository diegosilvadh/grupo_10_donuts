// Modulos y Constantes

const path = require('path');
const products = require('../database/products')
const controller = {
    index: (req,res) => {
        res.render('index',{products});
    },

// Controller Users

    login: (req,res) => {
        res.render('users/login');
    },
    register:  (req, res) => {
        res.render('users/register');
},

// Controller Products

    productDetail:  (req, res) => {
        res.render('products/productDetail');
},
    productCart:  (req, res) => {
        res.render('products/productCart');
},
    promotions:  (req, res) => {
        res.render('products/promotions');
},
};

module.exports = controller