import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./doraemon.module.css";
import text from "../assets/doraemontext.png";

const Doraemon = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    const movieId = "67beb367b0e4f494861656ac"; // Unique Movie ID
    const driveFileId = "1neiqJDtksOL1Is_rYQib-sDmUxgdrKai"; // Replace with actual Google Drive File ID
    const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Google Drive Embed Link

    navigate(`/play`, { state: { movieId, videoUrl } });
  };

  return ( 
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Doraemon" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 7+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Thrillers</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              Doraemon is a Japanese animated series that follows the adventures of
              a robotic cat, who travels back in time to help a young boy
              named Nobita with his gadgets.
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
              title="Doraemon Movie"
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

export default Doraemon;
