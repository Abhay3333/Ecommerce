// controllers/orderController.js
const express = require('express');
const router = express.Router();

// In-memory data store for orders (replace with a database)
const orders = [];

// Create a new order
router.post('/create-order', (req, res) => {
  const cart = req.body.cart;
  const userId = req.body.userId; // Assuming you have user authentication

  // Perform validation and create the order in the database
  const order = {
    orderId: generateOrderId(), // You can implement a function to generate unique order IDs
    userId,
    cart,
    orderDate: new Date(),
    status: 'Pending', // You can track order statuses (e.g., 'Pending', 'Shipped', 'Delivered')
  };

  orders.push(order);
  res.json({ message: 'Order created successfully', orderId: order.orderId });
});

// Get order details by order ID
router.get('/order/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const order = orders.find((o) => o.orderId === orderId);

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json(order);
});

// List a user's order history
router.get('/order-history/:userId', (req, res) => {
  const userId = req.params.userId;
  const userOrders = orders.filter((o) => o.userId === userId);

  res.json(userOrders);
});

// Function to generate a unique order ID (replace with your own implementation)
function generateOrderId() {
  // Implement your logic to generate a unique order ID here
}

module.exports = router;
