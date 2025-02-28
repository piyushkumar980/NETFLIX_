import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./free.module.css";
import logo from "../assets/logo.svg";
import movies from "../assets/kill poster.jpeg";
import cartoons from "../assets/cartoons.jpeg";
import sports from "../assets/sharktank.jpeg";
import music from "../assets/music.jpg";
import entertainment from "../assets/enterrtainment.jpg";

const Free = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleWatchNow = (videoUrl) => {
    navigate("/freemovie", { state: { videoUrl } }); // Redirects to /freemovie
    setSelectedVideo(`https://drive.google.com/file/d/${videoUrl}/preview`);
    setIsPlaying(true);
  };
  
  const categories = [
    { title: "Movies", hindiTitle: "फिल्में", image: movies, videoUrl: "1lDmVWdFmWR-CSa5aCy9JzIv8z2usD_OG" },
    { title: "Kids", hindiTitle: "बच्चों के लिए", image: cartoons, videoUrl: "1E6nFtsiSQB95NenIlNZx1yCa-x6ia5IC" },
    { title: "Entrepreneurship", hindiTitle: "उद्यमिता", image: sports, videoUrl: "10kwbLbEfwK5LPi-Z_cOXrQUWr-d7GFGI" },
    { title: "Music", hindiTitle: "संगीत", image: music, videoUrl: "1UCBxUV93dYiDErwe03sSQAwUXYmYQmCw" },
    { title: "Entertainment", hindiTitle: "मनोरंजन", image: entertainment, videoUrl: "1wVSZawqQSPmX3EcQNMiADxIn2PrzqlIQ" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="Netflix Logo" />
        <a className={styles.headerSignOut} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>

      <div className={styles.box}>
        <h1 className={styles.heading1}>
          {language === "Hindi" ? "आप क्या देखना चाहेंगे?" : "What Would You Like To Watch?"}
        </h1>
      </div>

      {!isPlaying ? (
        <div className={styles.block}>
          {categories.map(({ title, hindiTitle, image, videoUrl }) => (
            <div key={title} className={styles.block1}>
              <p className={styles.para}>{language === "Hindi" ? hindiTitle : title}</p>
              <img className={styles.movieImg} src={image} alt={title} />
              <button className={styles.button} onClick={() => handleWatchNow(videoUrl)}>
                {language === "Hindi" ? "अभी देखें" : "Watch Now"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src={selectedVideo}
            title="Video Player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )} 
    </div>
  );
};

export default Free;
