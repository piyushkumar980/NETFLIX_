const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) return res.status(401).json({ msg: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Store user ID in req.user
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;







