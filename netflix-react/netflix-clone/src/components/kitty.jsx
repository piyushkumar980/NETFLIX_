import React from "react";
import styles from "./kitty.module.css";
import { useNavigate } from "react-router-dom";
import text from "../assets/dhoomdhaamtext.webp";

const Kitty = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bea665b0e4f494861656a2";
    const driveFileId = "1kOYifFqEHPmVWY6eeA8OZt83nisKd8T6";
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Corrected Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };
  return ( 
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img className={styles.image} src={text} alt="image" />
        <div className={styles.tags}>
          <span className={styles.tag}>2025</span>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>Comedies</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          On their wedding night, an oddball couple is thrust into a chaotic
          chase, dodging goons and cops in a frenzied hunt for the mysterious
          “Charlie.”
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Kitty;
