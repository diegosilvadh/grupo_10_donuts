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
                res.render('/users',);
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
        const { email, password } = req.body;
		User.findOne({
            where: {
                email: email},
            })
            .then ((user) => {
                    let isOkThePassword = bcrypt.compareSync(password, user.password);
                    if (isOkThePassword) {
                        delete user.password;
                        req.session.userLogged = user;
                        res.cookie('userEmail',user.email)
                        return res.redirect('/users/profile');
                    }
                } 
            );
		/* return res.render('users/login', {
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
};

module.exports = controller