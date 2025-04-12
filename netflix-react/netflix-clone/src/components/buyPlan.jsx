import React, { useState, useEffect } from "react";
import styles from "./buyPlan.module.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const BuyPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const [language, setLanguage] = useState("English"); // Language state
  const navigate = useNavigate();

  // Load language preference from localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
 
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);

    // Alert message based on the selected plan
    const planDetails = {
      mobile: { price: "₹ 1", name: "Mobile" },
      basic: { price: "₹ 1", name: "Basic" },
      standard: { price: "₹ 1", name: "Standard" },
      premium: { price: "₹ 1", name: "Premium" },
    };

    const selectedPlanDetails = planDetails[plan];

    if (selectedPlanDetails) {
      alert(
        language === "Hindi"
          ? `आपने ${selectedPlanDetails.name} योजना चुनी है। कृपया ${selectedPlanDetails.price} का भुगतान करें। ध्यान दें: धनवापसी उपलब्ध नहीं है।`
          : `You have selected the ${selectedPlanDetails.name} plan. Please pay ${selectedPlanDetails.price}. Note: Refunds are not available.`
      );
    }
  };

  const handleNext = () => {
    if (!selectedPlan) {
      alert(
        language === "Hindi"
          ? "कृपया आगे बढ़ने से पहले एक योजना चुनें।"
          : "Please choose a plan before proceeding."
      );
    } else {
      navigate("/confirm");
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="keg.hsf" />
        <div className={styles.languageToggle}></div>
        <a className={styles.headerSignOut} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.box1}>
          <p className={styles.box1Para1}>
            {language === "Hindi" ? "चरण 1 में से 2" : "STEP 1 OF 2"}
          </p>
          <span className={styles.box1Heading}>
            {language === "Hindi"
              ? "वह योजना चुनें जो आपके लिए सही हो"
              : "Choose the plan that’s right for you"}
          </span>
        </div>

        <div className={styles.box2}>
          {/* Mobile Plan */}
          <div
            className={`${styles.card} ${
              selectedPlan === "mobile" ? styles.selected : ""
            }`}
            onClick={() => handlePlanSelect("mobile")}
          >
            <div className={styles.dummy1}>
              <span className={styles.dummyBox1}>
                {language === "Hindi" ? "मोबाइल" : "Mobile"}
              </span>
              <span className={styles.dummyBox2}>480p</span>
            </div>
            <div className={styles.dummy2}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "यह योजना केवल एक बार उपयोग के लिए है।"
                  : "Plan for one-time use only"}
              </span>
              <span className={styles.dummyBox4}>₹ 1</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "वीडियो और ध्वनि गुणवत्ता"
                  : "Video and sound quality"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi" ? "सामान्य" : "Fair"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "रिज़ॉल्यूशन" : "Resolution"}
              </span>
              <span className={styles.dummyBox4}>480p</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "समर्थित उपकरण" : "Supported devices"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi"
                  ? "मोबाइल फोन, टैबलेट"
                  : "Mobile phone, tablet"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "आपके घर के उपकरण एक साथ देख सकते हैं"
                  : "Devices your household can watch at the same time"}
              </span>
              <span className={styles.dummyBox4}>1</span>
            </div>
            <div className={styles.dummy4}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "डाउनलोड उपकरण" : "Download devices"}
              </span>
              <span className={styles.dummyBox4}>1</span>
            </div>
          </div>

          {/* Basic Plan */}
          <div
            className={`${styles.card} ${
              selectedPlan === "basic" ? styles.selected : ""
            }`}
            onClick={() => handlePlanSelect("basic")}
          >
            <div className={styles.dummy1}>
              <span className={styles.dummyBox1}>
                {language === "Hindi" ? "बेसिक" : "Basic"}
              </span>
              <span className={styles.dummyBox2}>720p</span>
            </div>
            <div className={styles.dummy2}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "यह योजना केवल एक बार उपयोग के लिए है।"
                  : "Plan for one-time use only"}
              </span>
              <span className={styles.dummyBox4}>₹ 1</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "वीडियो और ध्वनि गुणवत्ता"
                  : "Video and sound quality"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi" ? "अच्छा" : "Good"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "रिज़ॉल्यूशन" : "Resolution"}
              </span>
              <span className={styles.dummyBox4}>720p (HD)</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "समर्थित उपकरण" : "Supported devices"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi"
                  ? "टीवी, कंप्यूटर, मोबाइल फोन, टैबलेट"
                  : "TV, computer, mobile phone, tablet"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "आपके घर के उपकरण एक साथ देख सकते हैं"
                  : "Devices your household can watch at the same time"}
              </span>
              <span className={styles.dummyBox4}>1</span>
            </div>
            <div className={styles.dummy4}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "डाउनलोड उपकरण" : "Download devices"}
              </span>
              <span className={styles.dummyBox4}>1</span>
            </div>
          </div>

          {/* Standard Plan */}
          <div
            className={`${styles.card} ${
              selectedPlan === "standard" ? styles.selected : ""
            }`}
            onClick={() => handlePlanSelect("standard")}
          >
            <div className={styles.dummyLastCard1}>
              <span className={styles.dummyBox1}>
                {language === "Hindi" ? "स्टैंडर्ड" : "Standard"}
              </span>
              <span className={styles.dummyBox2}>1080p</span>
            </div>
            <div className={styles.dummy2}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "यह योजना केवल एक बार उपयोग के लिए है।"
                  : "Plan for one-time use only"}
              </span>
              <span className={styles.dummyBox4}>₹ 1</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "वीडियो और ध्वनि गुणवत्ता"
                  : "Video and sound quality"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi" ? "बहुत अच्छा" : "Great"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "रिज़ॉल्यूशन" : "Resolution"}
              </span>
              <span className={styles.dummyBox4}>1080p (Full HD)</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "समर्थित उपकरण" : "Supported devices"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi"
                  ? "टीवी, कंप्यूटर, मोबाइल फोन, टैबलेट"
                  : "TV, computer, mobile phone, tablet"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "आपके घर के उपकरण एक साथ देख सकते हैं"
                  : "Devices your household can watch at the same time"}
              </span>
              <span className={styles.dummyBox4}>2</span>
            </div>
            <div className={styles.dummy4}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "डाउनलोड उपकरण" : "Download devices"}
              </span>
              <span className={styles.dummyBox4}>2</span>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className={`${styles.card} ${
              selectedPlan === "premium" ? styles.selected : ""
            }`}
            onClick={() => handlePlanSelect("premium")}
          >
            <div className={styles.dummyLastCard2}>
              <span className={styles.dummyBox1}>
                {language === "Hindi" ? "प्रीमियम" : "Premium"}
              </span>
              <span className={styles.dummyBox2}>4K + HDR</span>
            </div>
            <div className={styles.dummy2}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "यह योजना केवल एक बार उपयोग के लिए है।"
                  : "Plan for one-time use only"}
              </span>
              <span className={styles.dummyBox4}>₹ 1</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "वीडियो और ध्वनि गुणवत्ता"
                  : "Video and sound quality"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi" ? "सर्वोत्तम" : "Best"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "रिज़ॉल्यूशन" : "Resolution"}
              </span>
              <span className={styles.dummyBox4}>4K (Ultra HD) + HDR</span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "स्थानिक ऑडियो (इमर्सिव साउंड)"
                  : "Spatial audio (immersive sound)"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi" ? "शामिल" : "Included"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "समर्थित उपकरण" : "Supported devices"}
              </span>
              <span className={styles.dummyBox4}>
                {language === "Hindi"
                  ? "टीवी, कंप्यूटर, मोबाइल फोन, टैबलेट"
                  : "TV, computer, mobile phone, tablet"}
              </span>
            </div>
            <div className={styles.dummy3}>
              <span className={styles.dummyBox3}>
                {language === "Hindi"
                  ? "आपके घर के उपकरण एक साथ देख सकते हैं"
                  : "Devices your household can watch at the same time"}
              </span>
              <span className={styles.dummyBox4}>4</span>
            </div>
            <div className={styles.dummy4}>
              <span className={styles.dummyBox3}>
                {language === "Hindi" ? "डाउनलोड उपकरण" : "Download devices"}
              </span>
              <span className={styles.dummyBox4}>6</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <p className={styles.bottomBoxPara}>
            {language === "Hindi"
              ? "एचडी (720p), फुल एचडी (1080p), अल्ट्रा एचडी (4K) और एचडीआर उपलब्धता आपकी इंटरनेट सेवा और डिवाइस क्षमताओं पर निर्भर करती है। सभी कंटेंट सभी रिज़ॉल्यूशन में उपलब्ध नहीं है। अधिक जानकारी के लिए हमारे उपयोग की शर्तें देखें। केवल वही लोग आपके खाते का उपयोग कर सकते हैं जो आपके साथ रहते हैं। प्रीमियम के साथ 4 अलग-अलग डिवाइस पर एक साथ देखें, स्टैंडर्ड के साथ 2, और बेसिक और मोबाइल के साथ 1।"
              : "HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details. Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile."}
          </p>
        </div>
        <button className={styles.button} onClick={handleNext}>
          {language === "Hindi" ? "अगला" : "Next"}
        </button>
      </div>

      <div className={styles.lastContent}>
        <p className={styles.netflixPara3}>
          {language === "Hindi" ? "प्रश्न हैं? कॉल करें" : "Questions? Call"}
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
            <a className={styles.content3Anchor} href="#help centre">
              {language === "Hindi" ? "सहायता केंद्र" : "Help Centre"}
            </a>
            <a className={styles.content3Anchor} href="#cookie preferences">
              {language === "Hindi"
                ? "कुकी प्राथमिकताएं"
                : "Cookie Preferences"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="#netflix shop">
              {language === "Hindi" ? "नेटफ्लिक्स शॉप" : "Netflix Shop"}
            </a>
            <a className={styles.content3Anchor} href="#corporate information">
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
              name="languagelist"
              form="languageform"
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

export default BuyPlan;