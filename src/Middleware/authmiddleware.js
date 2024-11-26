const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  try {
    // Get the token from either "x-api-key" 
    const authHeader = req.headers["x-api-key"] || req.headers["Authorization"];
    
    // If no token is provided, return an error response
    if (!authHeader) {
      return res.status(400).json({ status: false, msg: "Token must be present" });
    }

    // Check if token has "Bearer" prefix and extract the token
    let token = authHeader;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // If the token is missing or malformed, return an error response
    if (!token || !/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token)) {
      return res.status(400).json({ status: false, msg: "Invalid Token format" });
    }

    // Verify the token using JWT_SECRET from environment variables
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // If token is not valid or expired, return an error
    if (!decodedToken) {
      return res.status(400).json({ status: false, msg: "Provide a valid token" });
    }

    // Attach the decoded user information to the request object
    req.user = decodedToken;
    console.log("Decoded Token:", decodedToken); // Log the decoded token for debugging

    // Proceed to the next middleware or route handler
    next();

  } catch (err) {
    // Handle errors like token expiration, invalid token, or other internal issues
    console.error("Token Verification Error:", err);
    return res.status(500).json({ status: false, msg: "Internal server error", error: err.message });
  }
};

module.exports = verifyToken;
