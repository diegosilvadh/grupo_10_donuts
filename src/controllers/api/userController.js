
const db = require('../../database/models');


const controller = {
    index: (req, res) => {
        //let products = productsTable.all()
        db.User.findAll()
            .then(function(users){
                const response = {
                    meta: {
                        count: users.length,
                    },
                    results: users
                }
                res.status(302).json (response);
            })

    },

    show: (req,res) => {
        db.User.findByPk(req.params.id)
        .then(function(users){
            const response = {
                results: users
            }
            res.status(302).json (response);
        })
    },

    last: (req,res) => {
        db.User.findOne( {
            order: [
                ['id_user', 'DESC']
            ]},    
        )
        .then(function(users){
            const response = {
                meta: {
                    count: users.length,
                },
                results: users
            }
            res.status(302).json (response);
        })

    }

};

module.exports = controller 