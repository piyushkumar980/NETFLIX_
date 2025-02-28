import React, { useEffect, useState } from "react";
import styles from "./signOut.module.css";
import logo from "../assets/logo.svg";
import backgroundImage from "../assets/signout.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignOut = () => { 
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState("");
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    axios
      .post("http://localhost:5000/api/auth/logout")
      .then(() => {
        setFlashMessage(
          language === "Hindi"
            ? "सफलतापूर्वक साइन आउट किया गया!"
            : "Signed out successfully!"
        );

        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");

        setTimeout(() => {
          setFlashMessage("");
        }, 3000);
      })
      .catch((err) => console.error("Logout failed", err));

    const timer = setTimeout(() => {
      navigate("/");
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate, language]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {flashMessage && (
        <div className={styles.flashMessage}>{flashMessage}</div>
      )}

      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="Netflix Logo" />
        <button
          className={styles.headerSignIn}
          onClick={() => navigate("/signin")}
        >
          {language === "Hindi" ? "साइन इन करें" : "Sign In"}
        </button>
      </div>

      <div className={styles.box}>
        <h2 className={styles.heading1}>
          {language === "Hindi" ? "इतनी जल्दी जा रहे हैं?" : "Leaving So Soon?"}
        </h2>
        <p className={styles.boxPara}>
          {language === "Hindi"
            ? "सिर्फ आपकी जानकारी के लिए, आपको हमेशा नेटफ्लिक्स से साइन आउट करने की आवश्यकता नहीं है। यह केवल आवश्यक है यदि आप एक साझा या सार्वजनिक कंप्यूटर पर हैं।"
            : "Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer."}
        </p>
        <span className={styles.boxSpan}>
          {language === "Hindi"
            ? "आप 30 सेकंड में Netflix.com पर पुनः निर्देशित हो जाएंगे।"
            : "You’ll be redirected to Netflix.com in 30 seconds."}
        </span>
        <button className={styles.netflixButton} onClick={() => navigate("/")}>
          {language === "Hindi" ? "अभी जाएं" : "Go Now"}
        </button>
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
            <a className={styles.content3Anchor} href="#helpCentre">
              {language === "Hindi" ? "सहायता केंद्र" : "Help Centre"}
            </a>
            <a className={styles.content3Anchor} href="#information">
              {language === "Hindi"
                ? "कुकी प्राथमिकताएँ"
                : "Cookie Preferences"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#netflixShop">
              {language === "Hindi" ? "नेटफ्लिक्स शॉप" : "Netflix Shop"}
            </a>
            <a className={styles.content3Anchor} href="#corporateInformation">
              {language === "Hindi"
                ? "कॉर्पोरेट जानकारी"
                : "Corporate Information"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="termsOfUse">
              {language === "Hindi" ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>
          </div>
        </div>
        <div className={styles.netflixMainButton}>
          <button className={styles.netflixMainButton1}>
            <select
              className={styles.language}
              name="languageList"
              form="languageForm"
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
export default SignOut;
