import React, { useState } from "react";
import styles from "./UploadMovie.module.css"; // Import CSS module

const normalizeGoogleDriveUrl = (url) => {
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  return fileIdMatch ? `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}` : url;
};

const UploadMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    releaseDate: "",
    videoUrl: "",
  });

  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { title, description, genre, releaseDate, videoUrl } = formData;
    if (!title || !description || !genre || !releaseDate || !videoUrl) {
      setMessage("❌ Please fill in all fields before uploading.");
      return;
    }

    const normalizedVideoUrl = normalizeGoogleDriveUrl(videoUrl);

    setIsUploading(true);
    setMessage("⏳ Uploading... Please wait.");

    try {
      const response = await fetch("https://netflix-nvcs.onrender.com/api/movies/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          genre,
          releaseDate,
          videoUrl: normalizedVideoUrl,
          videoSource: "Google Drive",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Movie uploaded successfully!");
        setFormData({
          title: "",
          description: "",
          genre: "",
          releaseDate: "",
          videoUrl: "",
        });
      } else {
        setMessage("❌ Error: " + (data.error || "Upload failed"));
      }
    } catch (error) {
      setMessage("❌ Upload failed: " + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Upload a Movie</h2>
      <form className={styles.form} onSubmit={handleUpload}>
        <input
          type="text"
          className={styles.input}
          placeholder="Movie Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Movie Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          className={styles.input}
          placeholder="Genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className={styles.input}
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          className={styles.input}
          placeholder="Enter Google Drive video link"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button} disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Movie"}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default UploadMovie;



