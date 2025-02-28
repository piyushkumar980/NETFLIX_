import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./bean.module.css";
import text from "../assets/mrbeantext.png";

const MrBean = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    const movieId = "67b57900252a7539a59d9b29"; // Unique Movie ID
    const driveFileId = "1KcjE9_xzMoKFYfAcPQPEeAsivMbDYZ2p"; // Replace with actual Google Drive File ID
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Mr. Bean" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 7+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Thrillers</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              Mr. Bean is a British animated series based on the iconic character,
              a quirky and clumsy man who gets into comical situations due to his behavior.
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
              title="Mr. Bean Movie"
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

export default MrBean;
