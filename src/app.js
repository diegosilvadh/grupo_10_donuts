// Modulos

const express = require('express');
const app = express();
//Definimos el path de las rutas

const mainRouter = require('./routes/mainRouter');
app.use(express.static('./public'));
// Template engine

app.set('view engine', 'ejs')
app.set('views', './src/views')

// Levantamos el WebServer

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Donas Ready');
});

//Rutas

app.use('/', mainRouter);
app.use('/register', mainRouter);
app.use('/login', mainRouter);
app.use('/productDetail', mainRouter);
app.use('/productCart', mainRouter);
app.use('/promotions', mainRouter);
app.use('/abmProducts', mainRouter);