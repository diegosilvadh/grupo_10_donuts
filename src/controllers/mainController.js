// Modulos y Constantes

const path = require('path');
const products = require('../database/products')
const { Product } = require("../database/models")

// Modulos y Constantes

//const fs = require('fs');
//const path = require('path');
//const jsonTable = require('../database/jsonTable');
//const productsTable = jsonTable('products');

const controller = {
    /*index: (req,res) => {
        res.render('index',{products});
    }, */
    index: (req, res) => {
        Product.findAll()
            .then(products => {
                res.render('index', {  
                    products      
                });
            })
        
    },
    help: (req,res) => {
        res.render('help')
    }
}; 

module.exports = controller