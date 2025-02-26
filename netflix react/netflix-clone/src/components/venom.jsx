import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./venom.module.css";
import text from "../assets/venomtext.webp";

const Venom = () => {
  const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handleWatchNow = () => {
      const movieId = "67b4ca7535be881a23623b1a"; 
      const driveFileId = "1UPVW2v40zCJfjVQkfoZUtJe1ioayhwEL";
      const videoUrl = `https://drive.google.com/file/d/${driveFileId}/preview`; // Corrected Google Drive Embed Link
  
      navigate(`/play`, { state: { movieId, videoUrl } });
    }; 

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={text} alt="Venom" />
            <div className={styles.tags}>
              <span className={styles.tag}>2024</span>
              <span className={styles.tag}>U/A 16+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Action</span>
              <span className={styles.tag}>Sci-Fi</span>
              <span className={styles.tag}>Adventure</span>
            </div>
            <p className={styles.description}>
              Still on the run, journalist Eddie Brock and his alien companion Venom
              dodge threats from a vigilant military leader and ruthless invading
              symbiotes.
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
              title="Venom 3"
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

export default Venom;
