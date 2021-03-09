// Modulos y Constantes

const path = require('path');
const products = require('../database/products')

// Modulos y Constantes

//const fs = require('fs');
//const path = require('path');
//const jsonTable = require('../database/jsonTable');
//const productsTable = jsonTable('products');

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
        res.render('products/promotion');
},
abmProducts:  (req, res) => {
    res.render('products/abmproducts');
},
};

module.exports = controller