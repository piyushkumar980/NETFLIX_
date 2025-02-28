import React from "react";
import styles from "./xyz.module.css";
import { useNavigate } from "react-router-dom";
import text from "../assets/blackwarranttext.webp";

const Xyz = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bea6e6b0e4f494861656a5";
    const driveFileId = "1HQPF05WNDnd59OkoxoFxakOIRN1j2HR3";
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
          <span className={styles.tag}>Show</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          When an upright officer accepts a job at Tihar Jail, he vows to make
          amends after witnessing cold-blooded corruption within its walls.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Xyz;
