const express = require('express');
const dotenv = require('dotenv').config(); // This loads the .env file into process.env

const app = express();
const dbconnect = require('./servercreate');
const authrouter = require('./Routes/authRoutes');
const userrouter = require('./Routes/userRoutes');

// Database connection
dbconnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authrouter);
app.use("/api/user", userrouter);

// Start the server
const PORT = process.env.PORT || 3000; // Uses the value from .env, or defaults to 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Logs the port number to the console
});
