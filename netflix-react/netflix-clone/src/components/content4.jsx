import "../App.css";
import React from "react";
import rajma from "../assets/rajma img.png";
import vdoDevices from "../Videos/video-devices-in.m4v";

const Content4 = ({ language }) => {
  // Define content based on language selection
  const content = {
    heading1: language === "Hindi" ? "हर जगह देखें" : "Watch everywhere",
    heading2: language === "Hindi" 
      ? "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।"
      : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  };

  return (
    <>
    <div className="content4">
      <div className="content4-left">
        <h1 className="content4-heading1">{content.heading1}</h1>
        <h2 className="content4-heading2">{content.heading2}</h2>
      </div>  

      <div className="content4-right">
        <img src={rajma} alt="rajma" />
        <video
          className="content2-right-vdo"
          src={vdoDevices}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
    <div class="BOX"></div>
    </>
  );
};

export default Content4;
