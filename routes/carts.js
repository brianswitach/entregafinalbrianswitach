const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const cartsFilePath = path.join(__dirname, '../data/carritos.json');

// Helper function to read carts from the JSON file
const getCarts = () => {
  const data = fs.readFileSync(cartsFilePath, 'utf8');
  return JSON.parse(data);
};

// Helper function to write carts to the JSON file
const saveCarts = (carts) => {
  fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
};

// Create a new cart
router.post('/', (req, res) => {
  const carts = getCarts();
  const newCart = {
    id: Date.now(),
    products: req.body.products || [],
  };
  carts.push(newCart);
  saveCarts(carts);
  res.json(newCart);
});

// Add a product to a cart
router.post('/:cid/products/:pid', (req, res) => {
  const carts = getCarts();
  const cart = carts.find((c) => c.id === parseInt(req.params.cid));
  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  const productId = parseInt(req.params.pid);
  cart.products.push(productId);
  saveCarts(carts);
  res.json(cart);
});

// Get a cart by ID
router.get('/:cid', (req, res) => {
  const carts = getCarts();
  const cart = carts.find((c) => c.id === parseInt(req.params.cid));
  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  res.json(cart);
});

module.exports = router;
