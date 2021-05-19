
const db = require('../../database/models');


const controller = {
    index: (req, res) => {
        db.Category.findAll()
            .then(function(categories){
                const response = {
                    meta: {
                        count: categories.length,
                    },
                    results: categories
                }
                res.status(302).json (response);
            })

    },

    show: (req,res) => {
        db.Category.findByPk(req.params.id)
        .then(function(categories){
            const response = {
                results: categories
            }
            res.status(302).json (response);
        })
    }

};

module.exports = controller