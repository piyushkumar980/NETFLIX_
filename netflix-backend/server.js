require("dotenv").config(); // Load .env variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const path = require("path");
const Movie = require("./models/movie"); // Import your Movie model

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const _dirname = path.resolve();


// ✅ Middleware
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(
  cors({
    origin: ["http://localhost:5173", "https://netflix-0cfk.onrender.com"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files

// ✅ In-Memory Session Store (For Development)
const activeUsers = {}; // Tracks logged-in users

// ✅ Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/movies", movieRoutes); // Movie-related routes

// ✅ Add Movie Route - Now accepts a Google Drive URL directly and stores it
app.post("/api/movies/add", async (req, res) => {
  console.log("Incoming request body:", req.body); // Log the entire request body

  const { title, description, genre, releaseDate, videoUrl } = req.body; // Accept videoUrl in the request body

  // Check if all required fields are present
  if (!title || !description || !genre || !releaseDate || !videoUrl) {
    return res.status(400).json({
      error: "All fields are required, including video URL",
    });
  }

  // Validate Google Drive URL
  const googleDriveRegex = /drive\.google\.com/;
  if (!googleDriveRegex.test(videoUrl)) {
    return res.status(400).json({
      error: "Invalid video URL. Please provide a valid Google Drive link.",
    });
  }

  try {
    // Step 1: Save movie details along with Google Drive URL
    const newMovie = new Movie({
      title,
      description,
      genre,
      releaseDate,
      videoUrl: videoUrl, // Store the Google Drive link in the DB
    });

    // Save the movie to the database
    await newMovie.save();

    // Step 2: Respond with success and the Google Drive link and MongoDB ID
    res.status(201).json({
      success: true,
      movieId: newMovie._id, // MongoDB Object ID
      videoLink: videoUrl, // Google Drive link
    });
  } catch (error) {
    console.error("Error saving movie:", error);
    res.status(500).json({
      error: "Error saving movie details. Please try again.",
    });
  }
});

// ✅ Logout Route (Clears Session & Cookies)
app.post("/api/auth/signout", (req, res) => {
  const { email } = req.body; // Expect email in request body

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (activeUsers[email]) {
    delete activeUsers[email]; // Remove user from active session list
    res.clearCookie("token"); // ✅ Clear token cookie
    return res.status(200).json({ message: "User logged out successfully" });
  }

  return res.status(404).json({ error: "User not found in active sessions" });
});

// ✅ Razorpay Order Creation
app.post('/api/orders', async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: req.body.amount * 100, // Convert to paise
    currency: req.body.currency || "INR",
    receipt: `receipt_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ error: "Razorpay payment processing failed", details: error.message });
  }
});

// ✅ Razorpay Payment Verification
app.get("/api/payment/:paymentId", async (req, res) => {
  const { paymentId } = req.params;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const payment = await razorpay.payments.fetch(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    res.json({
      status: payment.status,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payment details" });
  }
});

// ✅ Connect to MongoDB with Improved Error Handling
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err.message);
  });

// ✅ Default Route
// app.get("/", (req, res) => {
//   res.send("🎬 Netflix Clone Backend is Running!");
// });

app.use(express.static(path.join(_dirname,"/netflix-react/netflix-clone/dist")));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"netflix-react/netflix-clone","dist","index.html"));
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);