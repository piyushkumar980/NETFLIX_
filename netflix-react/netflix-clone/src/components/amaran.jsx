import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./amaran.module.css";
import text from "../assets/amarantext.webp";

const Amaran = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bdc8acdcbd18203ed5f8f7";
    const driveFileId = "10q2VFTyiQfthiAJqNWQe8jpOwBReMHPi";
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
          <span className={styles.tag}>Romance</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          Honor, love and sacrifice collide as Major Mukund Varadarajan and his
          wife, Indhu, navigate an emotional romance amidst his rise within the
          Indian army.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Amaran;
