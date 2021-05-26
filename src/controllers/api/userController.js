
const db = require('../../database/models');


const controller = {
    index: (req, res) => {
        db.User.findAll()
            .then(function(users){
                const response = {
                    meta: { count: users.length },
                    results: users.map(user => {
                        let userObject = {
                          id: user.id_user,
                          first_name: user.first_name,
                          last_name: user.last_name,
                          username: user.username,
                          birthday: user.birthday,
                          email: user.email,
                          avatar: `http://localhost:3000/img/users/${user.avatar}`,
                          id_rol: user.id_rol,
                          detail: `http://localhost:3000/users/${user.id_user}`
                        }
                        return userObject
                      })
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
                    count: users.dataValues.id_user.length,
                },
                results : {
                    id: users.dataValues.id_user,
                    first_name: users.dataValues.first_name,
                    last_name: users.dataValues.last_name,
                    username: users.dataValues.username,
                    birthday: users.dataValues.birthday,
                    email: users.dataValues.email,
                    avatar: `http://localhost:3000/img/users/${users.dataValues.avatar}`,
                    id_rol: users.dataValues.id_rol,
                    detail: `http://localhost:3000/users/${users.dataValues.id_user}`
                }
            }
            res.status(302).json (response);
        })

    }

};

module.exports = controller 