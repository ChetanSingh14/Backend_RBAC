const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authmiddleware');
const authorizeroles = require('../middleware/rolemiddleware');

// Only admin can access routes
router.get('/admin', verifyToken, authorizeroles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Both admin and manager can access routes
router.get('/manager', verifyToken, authorizeroles("admin", "manager"), (req, res) => {
  res.json({ message: "Welcome Manager" });
});

// All can access routes
router.get('/user', verifyToken, authorizeroles("admin", "manager", "user"), (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports = router;
