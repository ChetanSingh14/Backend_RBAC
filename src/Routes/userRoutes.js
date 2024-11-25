const express = require('express');
const router = express.Router();
const verifytoken = require('../Middleware/authmiddleware');
const authorizeroles = require('../Middleware/rolemiddleware');

// Only admin can access routes
router.get('/admin', verifytoken, authorizeroles("admin"), (req, res) => {
    res.json({ message: "welcome admin" });
});

// Both admin and manager can access routes
router.get('/manager', verifytoken, authorizeroles("admin", "manager"), (req, res) => {
    res.json({ message: "welcome manager" });
});

// All can access routes
router.get('/user', verifytoken, authorizeroles("admin", "manager", "user"), (req, res) => {
    res.json({ message: "welcome user" });
});

module.exports = router;
