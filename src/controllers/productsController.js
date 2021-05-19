// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const productsTable = jsonTable('products');
const db = require("../database/models");
const { Product } = require("../database/models")
const { Category } = require("../database/models");
const { validationResult } = require('express-validator');
const { Op } = require("sequelize");

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
        Category.findAll()
            .then(categories => {
                res.render('products/create', {
                categories
                });
            })
    },
    store: (req, res) => {
        // Generamos el nuevo Producto
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('products/create', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
        }
        const { file } = req;
        let { name, price, discount_value, discount, description, id_category } = req.body;
        Product.create({
            name,
            price,
            discount_value,
            discount,
            description,
            image: file ? file.filename: image,
            icon_image: discount == 1 ? "fab fa-hotjar" : "ico-donut.jpg",
            id_category,
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
        Promise.all([
            Category.findAll(), 
            Product.findOne({ 
                where: {
                    id_product: req.params.id
                },
            })
        ])
        .then(([categories, product]) => {
            if ( product ) {
               res.render('products/detail', { categories, product })
            } else {
                res.send('No encontré el producto');
            }
        })
    },
    edit: (req, res) => {
        Promise.all([
            Category.findAll(), 
            Product.findOne({ 
                where: {
                    id_product: req.params.id
                },
            })
        ])
        .then(([categories, product]) => {
            if ( product ) {
               res.render('products/edit', { categories, product })
            } else {
                res.send('No encontré el producto');
            }
        })
    },
    update: (req, res) => {
        const { file } = req;
        const { name, price, discount_value, discount, description, id_category} = req.body;
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
                    id_category
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
    search: (req,res) => {
        Product.findAll({
            where: {
                name: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then  ((products) => {
            res.render('products/search', { products });
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