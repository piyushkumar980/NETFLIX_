import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./playMovie.module.css";

const PlayMovie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState(null);

  const movieId = location.state?.movieId;
  const passedVideoUrl = location.state?.videoUrl;

  useEffect(() => {
    if (!movieId) {
      console.error("No movie ID provided!"); 
      navigate("/"); // Redirect home if no movie ID
      return;
    }

    if (passedVideoUrl.includes("drive.google.com")) {
      const videoId = passedVideoUrl.split("/d/")[1]?.split("/")[0]; // Extract file ID
      if (videoId) {
        setVideoUrl(`https://drive.google.com/file/d/${videoId}/preview`);
      } else {
        setError("Invalid Google Drive URL format");
      }
    } else {
      setVideoUrl(passedVideoUrl); // Use normal URL if not Google Drive
    }
  }, [movieId, navigate, passedVideoUrl]);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        {error ? (
          <p className={styles.error}>⚠️ {error}</p>
        ) : videoUrl ? (
          <iframe
            className={styles.video}
            src={videoUrl}
            title="Movie Player"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ border: "none", width: "100%", height: "100%" }}
          ></iframe>
        ) : (
          <p>Loading movie...</p>
        )}
      </div>
    </div>
  );
};

export default PlayMovie;
  