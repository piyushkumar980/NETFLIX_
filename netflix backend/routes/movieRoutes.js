const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Helper function to validate video URLs for Google Cloud Storage and Google Drive
// Helper function to validate Google Drive video URLs (both 'view' and 'uc' formats)
const validateVideoUrl = (url, source) => {
  const urlPatterns = {
    GoogleCloud: /^https:\/\/storage\.googleapis\.com\/[a-z0-9.-]+\/[^\s]+$/,
    GoogleDrive: /^(https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/view\?usp=drive_link|https:\/\/drive\.google\.com\/uc\?export=download&id=[a-zA-Z0-9_-]+)$/,
  };

  console.log("Validating URL: ", url);

  if (source === "Google Cloud" && urlPatterns.GoogleCloud.test(url)) {
    return true;
  } else if (source === "Google Drive" && urlPatterns.GoogleDrive.test(url)) {
    return true;
  }

  return false;
};

// ✅ Add a new movie (Supports Google Cloud and Google Drive)
router.post("/add", async (req, res) => {
  console.log("🎬 Adding a new movie");

  try {
    const { title, description, genre, releaseDate, imageUrl, videoUrl, videoSource } = req.body;

    // Check for required fields
    if (!title || !description || !genre || !releaseDate || !videoUrl || !videoSource) {
      return res.status(400).json({ error: "All fields are required, including video URL and source" });
    }

    // Convert releaseDate to Date format
    const parsedReleaseDate = new Date(releaseDate);
    if (isNaN(parsedReleaseDate)) {
      return res.status(400).json({ error: "Invalid release date format" });
    }

    // Validate video URL based on the video source (Google Cloud or Google Drive)
    if (!validateVideoUrl(videoUrl, videoSource)) {
      return res.status(400).json({ error: `Invalid ${videoSource} video URL` });
    }

    // Create the new movie
    const newMovie = new Movie({
      title,
      description,
      genre,
      releaseDate: parsedReleaseDate,
      imageUrl: imageUrl || "https://via.placeholder.com/300x450?text=No+Image",
      videoUrl,
      videoSource,
    });

    // Save to the database
    await newMovie.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "✅ Movie added successfully!",
      movie: newMovie,
    });
  } catch (error) {
    console.error("❌ Error adding movie:", error);
    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

// ✅ Fetch movie by ID, returns video URL and source
router.get("/watch/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    // Send movie video URL and source
    res.json({
      videoUrl: movie.videoUrl,
      videoSource: movie.videoSource,
    });
  } catch (error) {
    console.error("❌ Error fetching movie:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

module.exports = router;
