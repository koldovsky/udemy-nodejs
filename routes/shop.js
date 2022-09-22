const path = require('path');
const express = require('express');

const rootDir = require('../util/root-dir.js');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(admin.products);
    res.sendFile( path.join(rootDir, 'views', 'shop.html') );
});

module.exports = router;