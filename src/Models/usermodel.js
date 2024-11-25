const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {  // Changed 'Password' to lowercase for consistency
    type: String,
    required: true,
    minlength: 6,  // You can set a minimum length for the password
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'manager'],
  },
});

// Add a custom method or middleware if needed for password hashing

module.exports = mongoose.model('User', userSchema);
