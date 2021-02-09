// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productsTable = jsonTable('products');

const controller = {
    index: (req, res) => {
        let products = productsTable.all()

        res.render('products/index', { 
            title: 'Listado de Productos', 
            products      
        });
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