import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./pushpa.module.css";
import pushpa from "../assets/pushpatext.webp";
 
const Pushpa = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    
      const movieId = "67b4c44cadd80ac0afc4544a"; 
      const videoUrl = "https://drive.google.com/file/d/17LH55QpUKDUxa0mHJ7I_fNkmaB-3AQ3a/preview?autoplay=1"; 
    
      navigate(`/play`, { state: { movieId, videoUrl } });
    
    
  };

  return ( 
    <div className={styles.background}>
      <div className={styles.overlay}></div> 
      <div className={styles.content}>
        {!isPlaying ? (
          <>
            <img className={styles.image} src={pushpa} alt="pushpa2" />
            <div className={styles.tags}>
              <span className={styles.tag}>2025</span>
              <span className={styles.tag}>U/A 16+</span>
              <span className={styles.tag}>Movie</span>
              <span className={styles.tag}>Action</span>
              <span className={styles.tag}>Dramas</span>
            </div>
            <p className={styles.description}>
              As his smuggling empire grows, a brazen Pushpa longs for power and
              respect on his vengeful journey, while facing old rivals and new.
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
              title="Pushpa 2"
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

export default Pushpa;

