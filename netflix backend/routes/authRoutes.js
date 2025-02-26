const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();
const activeUsers = {}; // 🔥 Stores active sessions in memory

// ✅ Check if Email Exists
router.post("/check-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({ status: "exists", message: "User exists. Redirect to Sign In." });
    } else {
      return res.status(200).json({ status: "new", message: "New user. Redirect to Welcome page." });
    }
  } catch (err) {
    console.error("Error checking email:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Register New User
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "User already exists. Please sign in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: "User registered successfully. Please log in." });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", { email, password });

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found!");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match!");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔥 Ensure JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT_SECRET not set in environment variables" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    // ✅ Store user in active session
    activeUsers[email] = true;

    // ✅ Set token in cookie (for security)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // 🔥 Use secure cookie in production
    });

    return res.status(200).json({ success: true, token, email: user.email });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Logout User (Properly)
router.post("/logout", (req, res) => {
  const { email } = req.body;
  const token = req.cookies.token; // Read token from cookies

  if (!email || !token) {
    return res.status(400).json({ message: "User not logged in" });
  }

  if (activeUsers[email]) {
    delete activeUsers[email]; // Remove from active sessions
    res.clearCookie("token"); // ✅ Clear token from cookies
    return res.status(200).json({ message: "Logged out successfully" });
  }

  return res.status(404).json({ message: "User not found in active sessions" });
});

module.exports = router;
