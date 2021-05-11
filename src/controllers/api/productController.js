
const db = require('../../database/models');


const controller = {
    index: (req, res) => {
        //let products = productsTable.all()
        db.Product.findAll()
            .then(function(products){
                const response = {
                    meta: {
                        count: products.length,
                    },
                    results: products
                }
                res.status(302).json (response);
            })

    },

    show: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(function(products){
            const response = {
                results: products
            }
            res.status(302).json (response);
        })
    }

};

module.exports = controller