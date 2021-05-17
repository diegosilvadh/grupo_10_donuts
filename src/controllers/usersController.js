// Modulos y Constantes
const bcrypt = require('bcryptjs');
const { User } = require("../database/models")
const { validationResult } = require('express-validator');

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
        const resultValidation = validationResult(req);
        console.log(resultValidation);
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
        }
        const { file } = req;
        let { first_name, last_name, username, birthday, email, password, myselection } = req.body;
        password = bcrypt.hashSync(password);
        id_rol = 1;

        User.findOne({
            where: { email: email }
        })
          .then (user => {
            
            if (user) {
                    //hacer algo cuando el mail existe
                    return res.render('users/register', {
                        oldData: req.body,
                        errors: {
                            email: {
                                msg: 'Ups! El mail ya existe'
                            }
                        }
                    });

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
            .catch(err => {
                console.log('ERROR', err)
                return reject(err)
              })
            })
    },
    destroy: (req, res) => {
        User.destroy({
            where:{ 
                id_user: req.params.id
            }
        })
            .then(() => {
                res.redirect('/users');
            })
    },
    profile: (req, res) => {
		return res.render('users/userProfile', {
			user: req.session.userLogged
		});
	},
    login: (req,res) => {
        res.render('users/login');
    },
    loginProcess: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('users/login', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
        }
        const { email, password } = req.body;
		User.findOne({
            where: {
                email: email},
            })
            .then(user => {
                
                if(user) {
                    if (bcrypt.compareSync(password, user.password)) { 
                        req.session.userLogged = user;
                        res.cookie('userEmail', user.email, { maxAge: (1000 * 60) * 60 });
                        return res.redirect('/users/profile'); 
                    }
                }
               
                return res.render('users/login', {
                    errors: {
                        password: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });

            })
            .catch(err => {
                console.log('ERROR', err)
                return reject(err)
            })
           
      
		/* if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword)  {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/');
			} 
			return res.render('users/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		}); */
	}, 
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
};

module.exports = controller