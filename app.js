const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/root-dir');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', admin.routes);
app.use(shopRoutes);


app.use( (_, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


app.listen(3000);
