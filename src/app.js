// Modulos

const express = require('express');
const app = express();
const methodOverride = require('method-override');
// Template engine
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', './src/views')

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Levantamos el WebServer

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Donas Ready');
});


//Definimos el path de las rutas

const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const apiProductsRouter = require('./routes/api/productsRouter');
const apiUsersRouter = require('./routes/api/usersRouter');
const usersRouter = require('./routes/usersRouter');
const session = require('express-session');
const cookies = require('cookie-parser');

// Uso de Session & Cookies

app.use(session({
	secret: "Grupo10 Donas",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());
//app.use(express.static('./public'));
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);
app.use((req,res,next) => {
    res.status(404).render("not-found");
});
