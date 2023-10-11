// controllers/cartController.js
const express = require('express');
const router = express.Router();

// In-memory data store for the cart (replace with a database)
const cart = [];

// Add a product to the cart
router.post('/add-to-cart', (req, res) => {
  const productId = req.body.productId;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  cart.push(product);
  res.json({ message: 'Product added to cart' });
});

// Get the cart contents
router.get('/cart', (req, res) => {
  res.json(cart);
});

// Update the quantity of a product in the cart
router.put('/update-quantity/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const quantity = parseInt(req.body.quantity);

  if (isNaN(productId) || isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }

  const productIndex = cart.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found in the cart' });
  }

  cart[productIndex].quantity = quantity;
  res.json({ message: 'Cart updated successfully' });
});

// Remove a product from the cart
router.delete('/remove-from-cart/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);

  if (isNaN(productId)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  const productIndex = cart.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found in the cart' });
  }

  cart.splice(productIndex, 1);
  res.json({ message: 'Product removed from cart' });
});

module.exports = router;
