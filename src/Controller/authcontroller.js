const User = require('../Models/usermodel');
const bcrypt = require('bcrypt'); // Corrected import
const jwt = require('jsonwebtoken'); // Corrected import

// Register new user
const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Corrected bcrypt spelling
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: `User registered successfully: ${username}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login existing user
const login = async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'User not found' }); // Changed message
  }

  // Compare passwords
  const check = await bcrypt.compare(password, user.password); // Corrected bcrypt spelling
  if (!check) {
    return res.status(400).json({ message: 'Invalid password' }); // Changed message
  }

  // Generate token
  const token = jwt.sign({ id: user._id ,role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' }); // Consistent secret name

  // Send token to the user
  res.status(200).json({ token });
};

module.exports = { register, login };
