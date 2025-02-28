import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./welcome2.module.css";
import logo from "../assets/logo.svg";

const Welcome2 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    // Get the stored userName and language from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName); 
    }
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

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
            {language === "Hindi" ? "चरण 1 का 2" : "STEP 1 OF 2"}
          </p>
          <h2 className={styles.boxHeading}>
            {language === "Hindi" ? `फिर से स्वागत है, ${userName}!` : `Welcome back, ${userName}!`}
          </h2>

          <div className={styles.dummyBox2}>
            <div className={styles.BOX}>
              <span className={styles.BOXImg}>✓</span>
              <span className={styles.BOXSpan}>
                {language === "Hindi" ? "कोई प्रतिबद्धता नहीं, कभी भी रद्द करें।" : "No commitments, cancel anytime."}
              </span>
            </div>
            <div className={styles.BOX}>
              <span className={styles.BOXImg}>✓</span>
              <span className={styles.BOXSpan}>
                {language === "Hindi" ? "कम कीमत में नेटफ्लिक्स पर सब कुछ।" : "Everything on Netflix for one low price."}
              </span>
            </div>
            <div className={styles.BOX}>
              <span className={styles.BOXImg}>✓</span>
              <span className={styles.BOXSpan}>
                {language === "Hindi" ? "कोई विज्ञापन नहीं और कोई अतिरिक्त शुल्क नहीं।" : "No ads and no extra fees. Ever."}
              </span>
            </div>
          </div> 

          <button className={styles.button} onClick={() => navigate("/plan")}> 
            {language === "Hindi" ? "अगला" : "Next"}
          </button>
        </div>
      </div>

      <div className={styles.lastContent}>
        <p className={styles.netflixPara3}>
          {language === "Hindi" ? "प्रश्न? कॉल करें " : "Questions? Call "}
          <a className={styles.netflixContactNo} href="contact">000-800-919-1694</a>
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
            <a className={styles.content3Anchor} href="#helpCentre">
              {language === "Hindi" ? "सहायता केंद्र" : "Help Centre"}
            </a>
            <a className={styles.content3Anchor} href="#information">
              {language === "Hindi" ? "कुकी प्राथमिकताएँ" : "Cookie Preferences"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#netflixShop">
              {language === "Hindi" ? "नेटफ्लिक्स शॉप" : "Netflix Shop"}
            </a>
            <a className={styles.content3Anchor} href="#corporateInformation">
              {language === "Hindi" ? "कॉर्पोरेट जानकारी" : "Corporate Information"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="termsOfUse">
              {language === "Hindi" ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome2;