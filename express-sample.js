const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="submit"></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('Middleware Root');
    res.send('<h1>Hello From Root</h1><a href="/add-product">Add product</a>');
})

app.listen(3000);

