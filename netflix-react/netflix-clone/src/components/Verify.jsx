import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Verify.module.css";
import logo from "../assets/logo.svg";
import shield from "../assets/shield.jpg";

const Verify = () => {
  const location = useLocation();
  const email = location.state?.email || "Not provided";
  const navigate = useNavigate();

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixlogo} src={logo} alt="Netflix Logo" />
        <a className={styles.headersignout} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>
      <div className={styles.content1}>
        <div className={styles.box}>
          <div className={styles.dummybox}>
            <img className={styles.dummyboxpara} src={shield} alt="Shield" />
          </div>
          <p className={styles.boxpara}>
            {language === "Hindi" ? "चरण 1 का 3" : "STEP 1 OF 3"}
          </p>
          <h2 className={styles.boxheading}>
            {language === "Hindi"
              ? "बहुत बढ़िया, अब हमें आपके ईमेल को सत्यापित करने दें"
              : "Great, now let us verify your email"}
          </h2>
          <div className={styles.dummybox2}>
            <div className={styles.BOX}>
              <p className={styles.BOXpara}>
                {language === "Hindi"
                  ? "सत्यापित करने के लिए हमने"
                  : "Click the link we sent to"}{" "}
                <span className={styles.BOXdummypara}>{email}</span>{" "}
                {language === "Hindi"
                  ? "पर भेजे गए लिंक पर क्लिक करें।"
                  : "to verify."}
              </p>
              <p className={styles.BOXpara}>
                {language === "Hindi"
                  ? "अपने ईमेल को सत्यापित करने से खाता सुरक्षा में सुधार होगा और आपको महत्वपूर्ण नेटफ्लिक्स संचार प्राप्त करने में मदद मिलेगी।"
                  : "Verifying your email will improve account security and help you receive important Netflix communications."}
              </p>
            </div>
          </div>
          <button
            className={styles.button}
            onClick={() => navigate("/chooseplan")}
          >
            {language === "Hindi" ? "छोड़ें" : "Skip"}
          </button>
        </div>
      </div>
      <div className={styles.lastcontent}>
        <p className={styles.netflixpara3}>
          {language === "Hindi" ? "प्रश्न? कॉल करें" : "Questions? Call"}{" "}
          <a className={styles.netflixcontactno} href="contact">
            000-800-919-1694
          </a>
        </p>
        <div className={styles.content3dummybox}>
          <div className={styles.content3box1}>
            <a className={styles.content3anchor} href="#FAQ">
              {language === "Hindi" ? "सामान्य प्रश्न" : "FAQ"}
            </a>
            <a className={styles.content3anchor} href="#privacy">
              {language === "Hindi" ? "गोपनीयता" : "Privacy"}
            </a>
          </div>
          <div className={styles.content3box1}>
            <a className={styles.content3anchor} href="#helpcentre">
              {language === "Hindi" ? "सहायता केंद्र" : "Help Centre"}
            </a>
            <a className={styles.content3anchor} href="#information">
              {language === "Hindi" ? "कुकी प्राथमिकताएँ" : "Cookie Preferences"}
            </a>
          </div>
          <div className={styles.content3box1}>
            <a className={styles.content3anchor} href="#netflixshop">
              {language === "Hindi" ? "नेटफ्लिक्स शॉप" : "Netflix Shop"}
            </a>
            <a className={styles.content3anchor} href="#corporateinformation">
              {language === "Hindi"
                ? "कॉर्पोरेट जानकारी"
                : "Corporate Information"}
            </a>
          </div>
          <div className={styles.content3box1}>
            <a className={styles.content3anchor} href="termsofuse">
              {language === "Hindi" ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>
          </div>
        </div>
        <div className={styles.netflixmainbutton}>
          <button className={styles.netflixmainbutton1}>
            <select
              className={styles.language}
              name="languagelist"
              form="languageform"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
            </select>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;












