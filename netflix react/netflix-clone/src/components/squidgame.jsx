import React from "react";
import styles from "./squidgame.module.css";
import { useNavigate } from "react-router-dom";
import squidgame from "../assets/squidgametext.webp";

const Squidgame = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const movieId = "67be2e788b33634c6ade12f8";
    const driveFileId = "17S1grkdxj2q_OMxZuZzZFtO4xfwZPlYe";
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Corrected Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };
  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div> 
      <div className={styles.content}>
        <img className={styles.image} src={squidgame} alt="pushpa2" />
        <div className={styles.tags}>
          <span className={styles.tag}>2024</span>
          <span className={styles.tag}>A</span>
          <span className={styles.tag}>Show</span>
          <span className={styles.tag}>Thrillers</span>
          <span className={styles.tag}>Dramas</span>
        </div>
        <p className={styles.description}>
          Hundreds of cash-strapped players accept a strange invitation to
          compete in children's games. Inside, a tempting prize awaits — with
          deadly high stakes.
        </p>
        {/* Watch Now Button */}
        <button className={styles.button} onClick={handleWatchNow}>
          Watch Now <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </div>
  );
};

export default Squidgame;
