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
    store: (req, res) => {
        // Generamos el nuevo Producto
        let product = req.body;

        if (req.file) {
            product.images = "/img/" + req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        let productId = productsTable.create(product);
        
        res.redirect('/products/' + productId);
    },
    show: (req, res) => {
        let product = productsTable.find(req.params.id);

        if ( product ) {
            res.render('products/detail', { product });
        } else {
            res.send('No encontré el producto');
        }
    },
    edit: (req, res) => {
        let product = productsTable.find(req.params.id);
        console.log (product);
        res.render('products/edit', { product });
    },
    update: (req, res) => {
        let product = req.body;
        product.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            product.images = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldProduct = productsTable.find(product.id);
            product.images = oldProduct.images;
        }

        if (req.file) {
            product.iconImage = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldProduct = productsTable.find(product.id);
            product.iconImage = oldProduct.iconImage;
        }


        let productId = productsTable.update(product);

        res.redirect('/products/' + productId);
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