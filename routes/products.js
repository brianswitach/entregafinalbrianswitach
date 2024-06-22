const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const productsFilePath = path.join(__dirname, '../data/productos.json');


const getProducts = () => {
  const data = fs.readFileSync(productsFilePath, 'utf8');
  return JSON.parse(data);
};


const saveProducts = (products) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};


router.get('/', (req, res) => {
  const products = getProducts();
  res.json(products);
});


router.post('/', (req, res) => {
  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };
  products.push(newProduct);
  saveProducts(products);
  res.json(newProduct);
});

module.exports = router;
