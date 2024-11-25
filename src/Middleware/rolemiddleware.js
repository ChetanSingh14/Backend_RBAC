const authorizeroles = (...allowedRoles) => {
    return (req, res, next) => {
      // Check if the user's role is in the allowedRoles array
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied" });
      }
      next(); // Proceed to the next middleware or route handler
    };
  };
  
  module.exports = authorizeroles;
  