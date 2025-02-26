import "../app.css";
import React from "react";
import children from "../assets/child3ren img.png";

const Content5 = ({ language }) => {
  // Define content based on language selection
  const content = {
    heading1: language === "Hindi" ? "बच्चों के लिए प्रोफाइल बनाएं" : "Create profiles for kids",
    heading2: language === "Hindi"
      ? "बच्चों को उनकी पसंदीदा कहानियों के पात्रों के साथ रोमांच पर भेजें, एक ऐसी जगह में जो सिर्फ उनके लिए बनाई गई है—आपकी सदस्यता के साथ मुफ्त।"
      : "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
  };

  return (
    <>
      <div className="content5">
        <div className="content5-left">
          <img className="content5-left-img" src={children} alt="children" />
        </div>

        <div className="content5-right">
          <h1 className="content5-heading1">{content.heading1}</h1>
          <h2 className="content5-heading2">{content.heading2}</h2> 
        </div>
      </div>
      <div class="BOX"></div>
    </>
  ); 
};

export default Content5;
