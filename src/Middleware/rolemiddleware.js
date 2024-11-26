const authorizeroles = (...allowedRoles) => {
  return (req, res, next) => {
    console.log("User Role:", req.user?.role); // Debug log
    console.log("Allowed Roles:", allowedRoles); // Debug log

    if (!allowedRoles.includes(req.user?.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next(); // Proceed to the next middleware or route handler
  };
};

module.exports = authorizeroles;
