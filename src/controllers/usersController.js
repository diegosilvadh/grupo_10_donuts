// Modulos y Constantes

const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');
const bcrypt = require('bcryptjs');
const { User } = require("../database/models")

const controller = {
    index: (req, res) => {
        //let users = usersTable.all()
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
       console.log(users);
    //    res.render('users/index', { 
    //        title: 'Listado de Usuarios', 
    //        users      
        });
    },
    register:  (req, res) => {
        res.render('users/register');   
    },
    store: (req, res) => {
        // Generamos el nuevo Usuario
        let user = req.body;
        user.password = bcrypt.hashSync(user.password);

        if (req.file) {
            user.avatar = req.file.filename;
        } else {
            res.send('La imagen es obligatoria');
        }
        
        let userId = usersTable.create(user);
        
        res.redirect('/users/' + userId);
    },
    show: (req, res) => {
        //let user = usersTable.find(req.params.id);
        User.findByPk(req.params.id)
            .then(user => {
                if ( user ) {
                    res.render('users/detail', { user });
                } else {
                    res.send('No encontré el usuario');
                }
            })
    //    if ( user ) {
    //        res.render('users/detail', { user });
    //    } else {
    //        res.send('No encontré el usuario');
    //    }
    },
    edit: (req, res) => {
        //let user = usersTable.find(req.params.id);
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
        let user = req.body;
        user.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            user.avatar = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldUser = usersTable.find(user.id);
            user.avatar = oldUser.avatar;
        }
        let userId = usersTable.update(user);

        res.redirect('/users/' + userId);
    },
    destroy: (req, res) => {
        //let users = usersTable.all()

        //usersTable.delete(req.params.id);
        User.destroy({
            where:{ 
                id_user: req.params.id
            }
        })
            .then(() => {
                res.redirect('/users');
            })
    },
    login: (req,res) => {
        res.render('users/login');
    },
};

module.exports = controller