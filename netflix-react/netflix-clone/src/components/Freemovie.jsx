import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Freemovie.module.css"; // Make sure this CSS file exists

const Freemovie = () => { 
  const location = useLocation();
  const navigate = useNavigate();
  const videoUrl = location.state?.videoUrl; // Get video URL from state

  if (!videoUrl) {
    return <p>Error: No video found. Go back and try again.</p>;
  }

  return (
    <div className={styles.videoContainer}>
      <button className={styles.closeButton} onClick={() => navigate(-1)}>✖</button>
      <iframe
        className={styles.video}
        src={`https://drive.google.com/file/d/${videoUrl}/preview`}
        title="Video Player"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Freemovie;
 