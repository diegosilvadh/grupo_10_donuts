//const User = require('../database/models/User');
const { User } = require("../database/models")
//const User = require('../controllers/usersController');

function userLoggedMiddleware(req, res, next) {
	
	//console.log ( 'req:', req.session.email);
	res.locals.isLogged = false;
	console.log('0')

	//let emailInCookie = req.cookies.userEmail;
	
     //if (req.cookies.userEmail == 'gcerati@gmail.com') {
	//	res.locals.isLogged = true;
	 //}
	//let userFromCookie = User.findOne('email', emailInCookie);

	let userFromCookie = '';
	req.cookies.userEmail = '';

    User.findOne({
        where: {
            email: req.cookies.userEmail},
        })
        .then ((user) => {
                 userFromCookie = req.cookies.userEmail;
				
                }
            
        );
		
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}

		if (req.session.userLogged) {
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}
		
}
module.exports = userLoggedMiddleware;