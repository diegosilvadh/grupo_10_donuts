// Modulos y Constantes
const bcrypt = require('bcryptjs');
const { User } = require("../database/models")

const controller = {
    index: (req, res) => {
        User.findAll({
            order: [
                ['username', 'ASC']
            ],
        })
            .then(users => {
                res.render('users/index', { 
                    title: 'Listado de Usuarios', 
                    users
            })  
        });
    },
    register:  (req, res) => {
        res.render('users/register');   
    },
    store: (req, res) => {
        const { file } = req;
        let { first_name, last_name, username, birthday, email, password, myselection } = req.body;
        password = bcrypt.hashSync(password);
        id_rol = 1;

        User.findOne({
            where: { email: email }
        })
          .then (user => {
            
            if (user) {
                console.log('El mail existe')
                res.render('users/register', { oldData: req.body});
            } else {
                User.create({
                    first_name,
                    last_name,
                    username,
                    birthday,
                    email,
                    avatar: file ? file.filename: avatar,
                    password,
                    myselection,
                    id_rol
                })
                .then (user => {
                    res.render('users/login', { user });
                })
            }
          })
          .catch(err => {
            console.log('ERROR', err)
            return reject(err)
          })

    },
    show: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                if ( user ) {
                    res.render('users/detail', { user });
                } else {
                    res.send('No encontré el usuario');
                }
            })
    },
    edit: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                if ( user ) {
                    res.render('users/edit', { user });
                } else {
                    res.send('No encontré el usuario');
                }
            })

    },
    update: (req, res) => {
        const { file } = req;
        const { first_name, last_name, username, birthday, email } = req.body;
        User.findOne({
            where: {id_user: req.params.id},    
            })
            .then ((user) => {
                user.update({
                    first_name,
                    last_name,
                    username,
                    birthday,
                    email,
                    avatar: file ? file.filename: user.avatar, 
                })
            .then  (() => {
                res.render('users/detail', { user });
            })
            .catch(err => console.log(err))
            })
    },
    destroy: (req, res) => {
        User.destroy({
            where:{ 
                id_user: req.params.id
            }
        })
            .then(() => {
                res.redirect('/users',);
            })
    },
    login: (req,res) => {
        res.render('users/login');
    },
};

module.exports = controller