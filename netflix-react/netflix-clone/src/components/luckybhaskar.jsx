import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./luckybhaskar.module.css";
import text from "../assets/luckybhaskartext.webp";

const LuckyBhaskar = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => { 
    const movieId = "67bc562fcfb3ac4271f71ad3"; 
      const driveFileId = "1WEXi7alkchbu0t-e3BqKuKYwrPbXSKBw";
      const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Corrected Google Drive Embed Link
  
      navigate(`/play`, { state: { movieId, videoUrl } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img className={styles.image} src={text} alt="Lucky Bhaskar" />
        <div className={styles.tags}>
          <span className={styles.tag}>2024</span>
          <span className={styles.tag}>U/A 7+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>Thrillers</span>
          <span className={styles.tag}>Dramas</span>
        </div>  
        <p className={styles.description}>
          A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man.
        </p>

        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default LuckyBhaskar;
