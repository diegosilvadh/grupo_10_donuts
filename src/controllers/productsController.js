// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const { Product } = require("../database/models")
const { Category } = require("../database/models");
const { validationResult } = require('express-validator');
const { Op } = require("sequelize");

const controller = {
    index: (req, res) => {
        Promise.all([
           Product.findAll(),
           Category.findAll()
        ])
            .then(([products, categories]) => {
                res.render('products/index', { 
                    title: 'Listado de Productos', 
                    products,
                    categories,      
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
            Category.findAll()
            .then ((categories) => {
                res.render('products/create', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    categories
                })
            })
        } else {
            const { file } = req;
            let { name, price, discount_value, discount, description, id_category } = req.body;
            Promise.all([
                Category.findAll(),
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
            ])
        .then (([categories, product]) => {
            res.render('products/detail', { product, categories });
        })
        .catch(err => {
            console.log('ERROR', err)
            return reject(err)
          })
        }
        
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
        Promise.all([
            Category.findAll(), 
            Product.findOne({ 
                where: {
                    id_product: req.params.id
                },
            })
        ])
            .then (([categories, product]) => {
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
                res.render('products/detail', { product,categories });
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