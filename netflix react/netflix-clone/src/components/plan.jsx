import React, { useEffect, useState } from "react";
import styles from "./plan.module.css";
import logo from "../assets/logo.svg";

const Plan = () => {
    const [language, setLanguage] = useState("English");

    useEffect(() => {
        // Get the stored language from localStorage
        const storedLanguage = localStorage.getItem("selectedLanguage");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <img className={styles.netflixlogo} src={logo} alt="Netflix Logo" />
                <a className={styles.headersignout} href="/signout">
                    {language === "Hindi" ? "साइन आउट" : "Sign Out"}
                </a>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {language === "Hindi" ? "नेटफ्लिक्स में आपका स्वागत है" : "Welcome to Netflix"}
                </h1>
                <p className={styles.description}>
                    {language === "Hindi"
                        ? "वह प्लान चुनें जो आपके लिए सही है। हमारे पेड प्लान के साथ अनलिमिटेड फिल्में और टीवी शो का आनंद लें, या हमारे मुफ्त प्लान के साथ संग्रह का अन्वेषण करें।"
                        : "Choose the plan that's right for you. Enjoy unlimited movies and TV shows with our paid plan, or explore our collection with the free plan."}
                </p>
                <div className={styles.buttonContainer}>
                    <a href="/free" className={`${styles.button} ${styles.buttonFree}`}>
                        {language === "Hindi" ? "मुफ्त में जारी रखें" : "Continue with Free"}
                    </a>
                    <a href="/buyplan" className={styles.button}>
                        {language === "Hindi" ? "पेड प्लान पर अपग्रेड करें" : "Upgrade to Paid"}
                    </a>
                </div>
                <div className={styles.footer}>
                    <p className={styles.footerLink}>
                        {language === "Hindi" ? "नेटफ्लिक्स में फिर से शामिल होना आसान है।" : "Rejoining Netflix is easy."}
                    </p>
                    <p className={styles.footerLink1}>
                        {language === "Hindi" ? "अपना प्लान चुनें और आप तुरंत देखना शुरू कर सकते हैं।" : "Choose your plan and you'll be watching in no time."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Plan;
 