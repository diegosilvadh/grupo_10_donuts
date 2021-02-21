// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productsTable = jsonTable('products');

const controller = {
    index: (req, res) => {
        let products = productsTable.all()
        console.log(products);
        res.render('products/index', { 
            title: 'Listado de Productos', 
            products      
        });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    show: (req, res) => {
        let product = productsTable.find(req.params.id);

        if ( product ) {
            res.render('products/detail', { product });
        } else {
            res.send('No encontré el producto');
        }
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