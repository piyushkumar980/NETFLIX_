import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./bheem.module.css";
import text from "../assets/chotabheemtext.png";

const Bheem = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    const movieId = "67b57759252a7539a59d9b17"; // Unique Movie ID
    const driveFileId = "1HUZ2sK9NEQsw-O439RkS9IrzIAA0gQRb"; // Replace with actual Google Drive File ID
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };
 
  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Chhota Bheem" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 7+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Thrillers</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              Chhota Bheem is an Indian animated series that follows the adventures
              of a brave and strong boy named Bheem, who lives in the fictional
              kingdom of Dholakpur.
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
              title="Chhota Bheem Movie"
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

export default Bheem;
