import React from "react";
import "../app.css";
import tvImage from "../assets/tv img.png";
import tvVideo from "../Videos/video-tv-in-0819.m4v";

const Content2 = ({ language = "English" }) => {
  return (
    <>
      <div className="content2">
        <div className="content2-left">
          <h1 className="content2-heading1">
            {language === "Hindi" ? "अपने टीवी पर आनंद लें" : "Enjoy on your TV"}
          </h1>
          <h2 className="content2-heading2">
            {language === "Hindi"
              ? "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और अधिक पर देखें।"
              : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
          </h2>
        </div>
        <div className="content2-right">
          <img className="content2-right-img" src={tvImage} alt="TV displaying Netflix content" />
          <video className="content2-right-vdo" src={tvVideo} autoPlay loop muted playsInline></video>
        </div>
      </div>
      <div class="BOX"></div>
    </>
  );
}; 

export default Content2;
