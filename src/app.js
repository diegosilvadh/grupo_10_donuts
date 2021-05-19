// Modulos

const express = require('express');
const app = express();
const methodOverride = require('method-override');
const auth = require('./middlewares/auth.js');

// Template engine
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', './src/views')
const cors = require('cors')


// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cors())

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


const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Uso de Session & Cookies

app.use(session({
	secret: "Grupo10 Donas",
	resave: false,
	saveUninitialized: true,
}));

app.use(cookies());
app.use(auth);
//app.use(express.static('./public'));


app.use(userLoggedMiddleware);

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);
app.use((req,res,next) => {
    res.status(404).render("not-found");
});
