import "../app.css";
import React from "react";
import GIRLImage from "../assets/girl img.jpg";
import NETFLIXBOOKImage from "../assets/netflix book img.png";
import DOWNLOAD from "../assets/download img.gif";

const Content3 = ({ language }) => {
  // Define content based on language
  const content = {
    heading1: language === "Hindi" ? "अपने शो डाउनलोड करें और ऑफलाइन देखें" : "Download your shows to watch offline",
    heading2: language === "Hindi" ? "अपने पसंदीदा शो को आसानी से सहेजें और देखने के लिए हमेशा कुछ न कुछ रखें।" 
                                    : "Save your favourites easily and always have something to watch.",
    para1: language === "Hindi" ? "अजनबी चीजें" : "Stranger Things",
    para2: language === "Hindi" ? "डाउनलोड हो रहा है..." : "Downloading..."
  };

  return (
    <>
    <div className="content3">
      <div className="content3-left">
        <img className="content3-left-img" src={GIRLImage} alt="" />
        <div className="dummy">
          <div className="dummy-left"> 
            <div className="dummy-4-img-box">
              <img className="dummy-4-img" src={NETFLIXBOOKImage} alt="book" />
            </div>
            <div className="dummy-4-para-box">
              <p className="dummy-4-para1">{content.para1}</p>
              <p className="dummy-4-para2">{content.para2}</p>
            </div>
 
            <div className="dummy-right">
              <img className="dummy-right-img" src={DOWNLOAD} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="content3-right">
        <h2 className="content3-heading1">{content.heading1}</h2>
        <h2 className="content3-heading2">{content.heading2}</h2>
      </div>
    </div>
    <div class="BOX"></div>
    </>
  );
};

export default Content3;




