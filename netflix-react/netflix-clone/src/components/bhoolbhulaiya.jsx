import React from "react";
import styles from "./bhoolbhulaiya.module.css";
import { useNavigate } from "react-router-dom";
import text from "../assets/bhoolbhulaiyatext.webp";

const BhoolBhulaiya = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67bcb154cfb3ac4271f71ae3";
    const driveFileId = "1kYT_T-GJ_Gg7gjBOVMysqHmlBL99YNvt";
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
          <span className={styles.tag}>U/A 13+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>Horror</span>
          <span className={styles.tag}>Comedies</span>
        </div>
        <p className={styles.description}>
          A fake ghostbuster is blackmailed into helping a royal family with
          their haunted palace, but dueling demonic possessions complicate
          matters.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default BhoolBhulaiya;
