const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Signup 
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ email, password: hashedPassword, loggedIn: true });

    res.status(201).json({ email: user.email, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    user.loggedIn = true; // Mark user as logged in
    await user.save();

    res.json({ email: user.email, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Auto-login (check if user is still logged in)
exports.autoLogin = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.loggedIn) {
      return res.json({ email: user.email, token: generateToken(user._id) });
    }

    return res.status(401).json({ message: "Session expired, please login again" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Logout
exports.logoutUser = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      user.loggedIn = false;
      await user.save();
    }
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
