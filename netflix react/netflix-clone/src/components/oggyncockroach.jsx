import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./oggyncockroach.module.css";
import text from "../assets/oggyncockroachtext.png";

const OggynCockroach = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    const movieId = "67b5796d252a7539a59d9b2f"; // Unique Movie ID
    const driveFileId = "1LPThuHhky_RA_I2HUBZYK0UF6SbjwS5y"; // Replace with actual Google Drive File ID
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Oggy and the Cockroaches" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 7+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Thrillers</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              Oggy and the Cockroaches is an animated series that centers around
              Oggy, a lazy cat, and his constant battle with three mischievous
              cockroaches.
            </p>
            {/* Watch Now Button */}
            <button className={styles.button} onClick={handleWatchNow}>
              Watch Now <span className={styles.arrow}>▶</span>
            </button>
          </>
        ) : (
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src={videoUrl}
              title="Oggy and the Cockroaches Movie"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default OggynCockroach;
