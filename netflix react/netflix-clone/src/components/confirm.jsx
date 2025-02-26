import React, { useEffect, useState } from "react";
import styles from "./confirm.module.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  // Load the selected language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } 
  }, []);

  // Handle language change
  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    localStorage.setItem("selectedLanguage", selectedLang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="Netflix Logo" />
        <a className={styles.headerSignOut} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>

      <div className={styles.content1}>
        <div className={styles.box}>
          <div className={styles.dummyBox}>
            <p className={styles.dummyBoxPara}>✓</p>
          </div>

          <p className={styles.boxPara}>
            {language === "Hindi" ? "चरण 2 का 2" : "STEP 2 OF 2"}
          </p>
          <h2 className={styles.boxHeading}>
            {language === "Hindi" ? "एक आखिरी बात।" : "One last thing."}
          </h2>

          <div className={styles.dummyBox2}>
            <div className={styles.boxContent}>
              <p className={styles.boxContentPara}>
                {language === "Hindi"
                  ? "हम आपकी सदस्यता पुनः आरंभ करने से पहले, आपको एक भुगतान विधि सेट अप करने की आवश्यकता होगी।"
                  : "Before we restart your membership, you'll need to set up a payment method."}
              </p>
              <p className={styles.boxContentPara}>
                {language === "Hindi"
                  ? "हमेशा की तरह, आप किसी भी समय ऑनलाइन रद्द कर सकते हैं।"
                  : "As always, you can cancel online at any time."}
              </p>
            </div>
          </div>

          <button
            className={styles.button}
            onClick={() => navigate("/payment")}
          >
            {language === "Hindi" ? "अगला" : "Next"}
          </button>
        </div>
      </div>

      <div className={styles.lastContent}>
        <p className={styles.netflixPara3}>
          {language === "Hindi" ? "प्रश्न? कॉल करें" : "Questions? Call"}
          <a className={styles.netflixContactNo} href="contact">
            000-800-919-1694
          </a>
        </p>

        <div className={styles.content3DummyBox}>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#FAQ">
              {language === "Hindi" ? "सामान्य प्रश्न" : "FAQ"}
            </a>
            <a className={styles.content3Anchor} href="#privacy">
              {language === "Hindi" ? "गोपनीयता" : "Privacy"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#help-centre">
              {language === "Hindi" ? "सहायता केंद्र" : "Help Centre"}
            </a>
            <a className={styles.content3Anchor} href="#information">
              {language === "Hindi" ? "कुकी प्राथमिकताएँ" : "Cookie Preferences"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#netflix-shop">
              {language === "Hindi" ? "नेटफ्लिक्स शॉप" : "Netflix Shop"}
            </a>
            <a className={styles.content3Anchor} href="#corporate-information">
              {language === "Hindi" ? "कॉर्पोरेट जानकारी" : "Corporate Information"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="terms-of-use">
              {language === "Hindi" ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>
          </div>
        </div>

        <div className={styles.netflixMainButton}>
          <select
            className={styles.language}
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

