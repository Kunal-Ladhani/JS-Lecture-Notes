// model for product
// we may have many entity classes or model classes
// its structure entirely depends on the data modelling we have done

// const products = [];
// now we will store it in file and then later inside DB - NoSQL

const fs = require('fs');
const path = require('path');

const pathUtil = require('../util/path');
const productPath = path.join(
    pathUtil,
    'data',
    'products.json');

const getProductsFromFile = callbackFunc => {
    fs.readFile(productPath, (err, fileContent) => {
        if (err) {
            // return [];
            callbackFunc([]);
        } else {
            // return JSON.parse(fileContent);
            callbackFunc(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        // products.push(this);
        // fs.readFile(productPath, (err, fileContent) => {
        //     let products = [];
        //     if (!err) {
        //         products = JSON.parse(fileContent);
        //     }
        // products.push(this);
        // fs.writeFile(productPath, JSON.stringify(products), (err) => {
        //     console.error(err);
        // });
        // });
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productPath, JSON.stringify(products), (err) => {
                console.error(err);
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}