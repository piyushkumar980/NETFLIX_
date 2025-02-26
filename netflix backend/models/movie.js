const mongoose = require("mongoose");
const slugify = require("slugify");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  releaseDate: { type: Date, required: true },
  imageUrl: {
    type: String,
    default: "https://via.placeholder.com/300x450?text=No+Image",
  },
  videoUrl: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (url) {
        return /^https:\/\/drive\.google\.com\/(file\/d\/[a-zA-Z0-9_-]+\/view\?usp=drive_link|uc\?export=download&id=[a-zA-Z0-9_-]+)$/.test(
          url
        );
      },
      message:
        "Invalid Google Drive video URL. Must be a viewable or direct download link.",
    },
  },
  videoSource: {
    type: String,
    enum: ["Google Drive", "YouTube", "Vimeo"], // Now includes Google Drive properly
    required: true,
    default: "Google Drive",
  },
  slug: { type: String, unique: true, trim: true },
  duration: { type: Number, default: 0 },
  rating: { type: Number, min: 0, max: 10, default: 0 },
  cast: [{ type: String, trim: true }],
});

// Middleware to generate a unique slug before saving
movieSchema.pre("save", async function (next) {
  if (!this.slug) {
    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await this.constructor.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    this.slug = slug;
  }
  next();
});

// Middleware to normalize Google Drive URL before saving
movieSchema.pre("save", function (next) {
  if (this.videoSource === "Google Drive" && this.videoUrl) {
    const fileIdMatch =
      this.videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
      this.videoUrl.match(/id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      this.videoUrl = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
  }
  next();
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
