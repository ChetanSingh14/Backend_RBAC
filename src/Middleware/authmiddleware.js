const jwt = require("jsonwebtoken"); // Correct module name

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  let token;
  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Decoded user:", req.user);
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: "Token not valid" });
  }
};

module.exports = verifyToken;
