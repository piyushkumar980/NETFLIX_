import React from "react";
import styles from "./devara.module.css";
import { useNavigate } from "react-router-dom";
import text from "../assets/devaratext.webp";

const Devara = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bea907b0e4f494861656a9";
    const driveFileId = "1Tppxr4T2Znb9lxR8tiJArqjaQeEHMnbm";
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
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>Action</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          A mighty sea warrior takes a violent stand against the criminal deeds
          of his village. Years later, his mild-mannered son walks a path of his
          own.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Devara;
