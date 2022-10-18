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
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
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