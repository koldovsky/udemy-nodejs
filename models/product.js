const path = require('path');
const fs = require('fs');

const dataFilePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const readProductsFromFile = (cb) => {
    fs.readFile(dataFilePath, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        return cb(JSON.parse(fileContent));
    })
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        readProductsFromFile(products => {
            products.push(this);
            fs.writeFile(dataFilePath, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        readProductsFromFile(cb);
    }
}