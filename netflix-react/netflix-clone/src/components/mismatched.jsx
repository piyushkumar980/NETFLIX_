import React from "react";
import styles from "./mismatched.module.css";
import { useNavigate } from "react-router-dom";
import text from "../assets/mismatchedtext.webp";

const Mismatched = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bdd55bdcbd18203ed5f904";
    const driveFileId = "1JJOMClezWUSXr-TfwXmdHqZ8_Sf90x2O";
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Corrected Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };
  return (  
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img className={styles.image} src={text} alt="image" />
        <div className={styles.tags}>
          <span className={styles.tag}>2024</span>
          <span className={styles.tag}>A</span>
          <span className={styles.tag}>Show</span>
          <span className={styles.tag}>Comedies</span>
          <span className={styles.tag}>Romance</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          After a disastrous set-up by their families, two teens strike up a
          tentative friendship at their summer program — but deeper feelings
          aren’t far behind.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Mismatched;
