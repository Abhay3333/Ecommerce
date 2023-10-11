// controllers/searchController.js
const express = require('express');
const router = express.Router();

// In-memory data store for products (replace with a database)
const products = [
  { id: 1, name: 'Product 1', price: 10, category: 'Fitness Equipment' },
  { id: 2, name: 'Product 2', price: 20, category: 'Apparel' },
  // Add more products here
];

// Search for products based on keywords or filters
router.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  const category = req.query.category;

  // Perform the search based on the provided keyword and/or category
  let results = products;

  if (keyword) {
    results = results.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (category) {
    results = results.filter((product) =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(results);
});

module.exports = router;
