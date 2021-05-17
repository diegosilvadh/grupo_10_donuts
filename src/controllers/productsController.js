// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productsTable = jsonTable('products');
const db = require("../database/models");
const { Product } = require("../database/models")
const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
        Product.findAll()
            .then(products => {
                res.render('products/index', { 
                    title: 'Listado de Productos', 
                    products      
                });
            })
        
    },
    create: (req, res) => {
        res.render('products/create');
    },
    store: (req, res) => {
        // Generamos el nuevo Producto
        const resultValidation = validationResult(req);
        console.log(resultValidation);
        if (resultValidation.errors.length > 0) {
            return res.render('products/create', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
        }
        const { file } = req;
        let { name, price, discount_value, discount, description } = req.body;
        Product.create({
            name,
            price,
            discount_value,
            discount,
            description,
            image: file ? file.filename: image
        })
        .then (product => {
            res.render('products/detail', { product });
        })
        .catch(err => {
            console.log('ERROR', err)
            return reject(err)
          })
    },
    show: (req, res) => {
        Product.findByPk(req.params.id)
            .then(product => {
                if ( product ) {
                    res.render('products/detail', { product });
                } else {
                    res.send('No encontré el producto');
                }
            })
    },
    edit: (req, res) => {
        Product.findByPk(req.params.id)
            .then(product => {
                if ( product ) {
                    res.render('products/edit', { product });
                } else {
                    res.send('No encontré el producto');
                }
            })

    },
    update: (req, res) => {
        const { file } = req;
        const { name, price, discount_value, discount, description} = req.body;
        Product.findOne({
            where: {id_product: req.params.id},    
            })
            .then ((product) => {
                product.update({
                    name,
                    price,
                    discount_value,
                    discount,
                    description,
                    image: file ? file.filename: product.image,
            })
            .then  (() => {
                res.render('products/detail', { product });
            })
            .catch(err => {
                console.log('ERROR', err)
                return reject(err)
              })
            })
    },
    destroy: (req, res) => {
        Product.destroy({
            where:{ 
                id_product: req.params.id
            }
        })
            .then(() => {
                res.redirect('/products');
            })
    },

// Controller Products
    productCart:  (req, res) => {
        res.render('products/productCart');
},
    promotions:  (req, res) => {
        res.render('products/promotion');
},
};

module.exports = controller