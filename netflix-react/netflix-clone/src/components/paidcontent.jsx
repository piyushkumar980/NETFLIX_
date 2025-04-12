import React, { useEffect, useState } from "react";
import styles from "./paidcontent.module.css";
import logo from "../assets/logo.svg";
import pushpa2 from "../assets/pushpa2.webp";
import squidgame from "../assets/squidgame.webp";
import luckybhaskar from "../assets/luckybhaskar.webp";
import venom from "../assets/venom.webp";
import bhoolbhulaiya from "../assets/bhoolbhulaiya.webp";
import mismatched from "../assets/mismatched.webp";
import xyz from "../assets/blackwarrant.webp";
import amaran from "../assets/amaran.webp";
import dhoomdhaam from "../assets/dhoomdhaam.webp";
import devara from "../assets/devara.webp";
import chotabheem from "../assets/chotabheem.jpeg";
import motupatlu from "../assets/motupatlu.jpeg";
import ninjahattori from "../assets/ninjahattori.png";
import doraemon from "../assets/doraemon.jpeg"; 
import shinchan from "../assets/shinchan.png";
import tomnjerry from "../assets/tomnjerry.jpeg";
import mrbean from "../assets/mrbean.jpeg";
import junglebook from "../assets/junglebook.jpeg";
import oggyncockroach from "../assets/oggyncockroach.jpeg";
import shiva from "../assets/shiva.jpeg";
import song1 from "../assets/song1.webp";
import song2 from "../assets/song2.webp";
import song3 from "../assets/song3.webp";
import song4 from "../assets/song4.webp";
import song5 from "../assets/song5.webp";
import song6 from "../assets/song6.webp";
import song7 from "../assets/song7.webp";
import song8 from "../assets/song8.webp";
import song9 from "../assets/song9.webp";
import song10 from "../assets/song10.webp";
import { FaPlay } from "react-icons/fa"; // Import FontAwesome Play icon

// Import overlay components
import PushpaContent from "./pushpa";
import SquidGameContent from "./squidgame";
import LuckyBhaskarContent from "./luckybhaskar";
import Bhoolbhulaiya2 from "./bhoolbhulaiya";
import Venom2 from "./venom";
import Mismatchedcontent from "./mismatched";
import Xyzcontent from "./xyz";
import Amarancontent from "./amaran";
import Kittycontent from "./kitty";
import Devaracontent from "./devara";
import Bheemcontent from "./bheem";
import MotuPatlucontent from "./motupatlu";
import NinjaHattoriContent from "./ninjahattori";
import DoraemonContent from "./doraemon";
import ShinchanContent from "./shinchan";
import TomnJerryContent from "./tomnjerry";
import MrBeanContent from "./bean";
import JungleBookContent from "./junglebook";
import OggynCockroachContent from "./oggyncockroach";
import ShivaContent from "./shiva";
import Song1Content from "./song1";
import Song2Content from "./song2";
import Song3Content from "./song3";
import Song4Content from "./song4";
import Song5Content from "./song5";
import Song6Content from "./song6";
import Song7Content from "./song7";
import Song8Content from "./song8";
import Song9Content from "./song9";
import Song10Content from "./song10";

const DummyCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentPosition2, setCurrentPosition2] = useState(0);
  const [currentPosition3, setCurrentPosition3] = useState(0);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const cardWidth = 150 + 20; // Card width + gap
  const maxScroll = (10 - 4.5) * cardWidth;

  const moveRight = (setPosition, position) => {
    if (position > -maxScroll) {
      setPosition(position - cardWidth);
    }
  };

  const moveLeft = (setPosition, position) => {
    if (position < 0) {
      setPosition(position + cardWidth);
    }
  };

  const [language, setLanguage] = useState("English");
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  const images = [
    { src: pushpa2, overlay: "pushpa" },
    { src: squidgame, overlay: "squidgame" },
    { src: luckybhaskar, overlay: "luckybhaskar" },
    { src: bhoolbhulaiya, overlay: "bhoolbhulaiya" },
    { src: venom, overlay: "venom" },
    { src: mismatched, overlay: "mismatched" },
    { src: amaran, overlay: "amaran" },
    { src: devara, overlay: "devara" },
    { src: xyz, overlay: "xyz" },
    { src: dhoomdhaam, overlay: "kitty" },
  ];

  const images2 = [
    { src: chotabheem, overlay: "bheem" },
    { src: motupatlu, overlay: "motupatlu" },
    { src: ninjahattori, overlay: "ninjahattori" },
    { src: doraemon, overlay: "doraemon" },
    { src: shinchan, overlay: "shinchan" },
    { src: tomnjerry, overlay: "tomnjerry" },
    { src: mrbean, overlay: "mrbean" },
    { src: junglebook, overlay: "junglebook" },
    { src: oggyncockroach, overlay: "oggyncockroach" },
    { src: shiva, overlay: "shiva" },
  ];

  const images3 = [
    { src: song1, overlay: "song1" },
    { src: song2, overlay: "song2" },
    { src: song3, overlay: "song3" },
    { src: song4, overlay: "song4" },
    { src: song5, overlay: "song5" },
    { src: song6, overlay: "song6" },
    { src: song7, overlay: "song7" },
    { src: song8, overlay: "song8" },
    { src: song9, overlay: "song9" },
    { src: song10, overlay: "song10" },
  ];

  const overlayComponents = {
    pushpa: <PushpaContent />,
    squidgame: <SquidGameContent />,
    luckybhaskar: <LuckyBhaskarContent />,
    bhoolbhulaiya: <Bhoolbhulaiya2 />,
    venom: <Venom2 />,
    mismatched: <Mismatchedcontent />,
    amaran: <Amarancontent />,
    devara: <Devaracontent />,
    xyz: <Xyzcontent />,
    kitty: <Kittycontent />,

    bheem: <Bheemcontent />,
    motupatlu: <MotuPatlucontent />,
    ninjahattori: <NinjaHattoriContent />,
    doraemon: <DoraemonContent />,
    shinchan: <ShinchanContent />,
    tomnjerry: <TomnJerryContent />,
    mrbean: <MrBeanContent />,
    junglebook: <JungleBookContent />,
    oggyncockroach: <OggynCockroachContent />,
    shiva: <ShivaContent />,

    song1: <Song1Content />,
    song2: <Song2Content />,
    song3: <Song3Content />,
    song4: <Song4Content />,
    song5: <Song5Content />,
    song6: <Song6Content />,
    song7: <Song7Content />,
    song8: <Song8Content />,
    song9: <Song9Content />,
    song10: <Song10Content />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="Netflix Logo" />
        <a className={styles.headerSignOut} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>
      <div className={styles.box}></div>

      {/* First Carousel */}
      <div>
        <div className={styles.carouselContainer}>
          <span className={styles.trendingText}>
            {language === "Hindi" ? "अभी प्रचलित" : "Trending Now"}
          </span>
          <button
            className={`${styles.carouselBtn} ${styles.left} ${
              currentPosition === 0 ? styles.hidden : ""
            }`}
            onClick={() => moveLeft(setCurrentPosition, currentPosition)}
          >
            &#10094;
          </button>
          <div className={styles.carouselContent}>
            <div
              className={styles.cardsWrapper}
              style={{ transform: `translateX(${currentPosition}px)` }}
            >
              {images.map((image, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => setActiveOverlay(image.overlay)}
                >
                  <img
                    src={image.src}
                    alt={`Movie Poster ${index + 1}`}
                    loading="lazy"
                  />
                  <div className={styles.number}>{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.carouselBtn} ${styles.right}`}
            onClick={() => moveRight(setCurrentPosition, currentPosition)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Second Carousel */}
      <div>
        <div className={styles.carouselContainer}>
          <span className={styles.trendingText}>
            {language === "Hindi" ? "लोकप्रिय शो" : "Popular Kids Shows"}
          </span>
          <button
            className={`${styles.carouselBtn2} ${styles.left} ${
              currentPosition2 === 0 ? styles.hidden : ""
            }`}
            onClick={() => moveLeft(setCurrentPosition2, currentPosition2)}
          >
            &#10094;
          </button>
          <div className={styles.carouselContent}>
            <div
              className={styles.cardsWrapper}
              style={{ transform: `translateX(${currentPosition2}px)` }}
            >
              {images2.map((image, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => setActiveOverlay(image.overlay)} // Added onClick handler
                >
                  <img
                    src={image.src}
                    alt={`Popular Show ${index + 1}`}
                    loading="lazy"
                  />
                  <div className={styles.number}>{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.carouselBtn2} ${styles.right}`}
            onClick={() => moveRight(setCurrentPosition2, currentPosition2)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Third Carousel */}
      <div>
        <div className={styles.carouselContainer}>
          <span className={styles.trendingText}>
            {language === "Hindi" ? "धमाकेदार बीट्स" : "Vibe Station"}
          </span>
          <button
            className={`${styles.carouselBtn3} ${styles.left} ${
              currentPosition3 === 0 ? styles.hidden : ""
            }`}
            onClick={() => moveLeft(setCurrentPosition3, currentPosition3)}
          >
            &#10094;
          </button>
          <div className={styles.carouselContent}>
            <div
              className={styles.cardsWrapper}
              style={{ transform: `translateX(${currentPosition3}px)` }}
            >
              {images3.map((image, index) => (
                <div
                  className={styles.thirdimageContainer}
                  key={index}
                  onClick={() => setActiveOverlay(image.overlay)} // Added onClick handler
                >
                  <img
                    src={image.src}
                    alt={`Popular Show ${index + 1}`}
                    loading="lazy"
                  />
                  <div className={styles.playButton}>
                    <FaPlay />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.carouselBtn3} ${styles.right}`}
            onClick={() => moveRight(setCurrentPosition3, currentPosition3)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Overlay */}
      {activeOverlay && (
        <div className={styles.overlayContainer}>
          <div className={styles.overlayContent}>
            <button
              className={styles.closeButton}
              onClick={() => setActiveOverlay(null)}
              aria-label="Close"
            >
              ✖
            </button>
            {overlayComponents[activeOverlay]}
          </div>
        </div>
      )}
    </div>
  );
};

export default DummyCarousel;
