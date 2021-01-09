const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Donas Ready');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});