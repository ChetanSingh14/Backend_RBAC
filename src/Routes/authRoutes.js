const express = require('express');
const { register, login } = require('../Controller/authcontroller');
const router = express.Router();

// User Registration Route
router.post('/register', register);

// User Login Route
router.post('/login', login);

module.exports = router;
