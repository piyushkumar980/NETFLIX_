import React, { useState, useRef } from "react";
import styles from "./song1.module.css";
import song10 from "../assets/song10.webp";
import gif from "../assets/songgif.gif";

const Song10 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleListenNow = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  const driveFileId = "1UCBxUV93dYiDErwe03sSQAwUXYmYQmCw";
  const audioUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        {!isPlaying ? (
          <div className={styles.card}>
            <img className={styles.image} src={song10} alt="Audio Cover" />
            <div className={styles.info}>
              <h2 className={styles.title}>Exclusive Audio Experience</h2>
              <div className={styles.tags}>
                <span className={styles.tag}>Premiere</span>
                <span className={styles.tag}>Exclusive</span>
                <span className={styles.tag}>Immersive</span>
                <span className={styles.tag}>Harmonic</span>
                <span className={styles.tag}>Echo</span>
              </div>
              <p className={styles.description}>
                A deep, immersive audio experience featuring music and
                storytelling.
              </p>
              <button className={styles.button} onClick={handleListenNow}>
                🎧 Listen Now
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.audioContainer}>
            {/* Hidden Audio Element */}
            <audio ref={audioRef} style={{ display: "none" }}>
              <source src={audioUrl} type="audio/mpeg" />
            </audio>

            {/* Google Drive Embedded Audio Fallback */}
            <iframe
              src={`https://drive.google.com/file/d/${driveFileId}/preview`}
              width="320"
              height="80"
              allow="autoplay"
              className={styles.iframe}
            ></iframe>
            <img className={styles.image2} src={gif} alt="Audio Cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Song10;
