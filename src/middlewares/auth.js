module.exports = (req, res, next) => {
    if (req.session.userEmail) {
        //console.log('Usuario logueado',req.session.user);
        res.locals.userEmail = req.session.userEmail;
    };
    res.locals.session = req.session;
    console.log('auth.js : DATOS ACTUALES DE MI SESSION :', res.locals.session);
    next();
};