import React, { useEffect, useState } from "react";
import styles from "./payment.module.css";
import logo from "../assets/logo.svg";
import scanner from "../assets/piyush scanner.jpg";
import bhim from "../assets/BHIM.png";
import paytm from "../assets/PAYTM.png";
import phonepe from "../assets/PHONEPE.png";
import amazonpay from "../assets/AMAZONPAY.png";
import gpay from "../assets/GPAY.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [showScanner, setShowScanner] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [showNextButton, setShowNextButton] = useState(false); // New state for the "Next" button

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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = async (amount) => {
    let data = JSON.stringify({
      // amount: amount * 100, // Convert to paise
      amount: amount,
      currency: "INR",
    });

    let config = {
      method: "post",
      url: "http://localhost:5000/api/orders",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log("Order Response:", response.data);
      handleRazorPayScreen(response.data); // Pass the order data here
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
    }
  };

  const handleRazorPayScreen = async (order) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // ✅ Uses frontend-safe key
      amount: order.amount,
      currency: order.currency,
      order_id: order.order_id,
      handler: function (response) {
        console.log("Payment Successful:", response);
        confirmPayment(); // Navigate to paid content after successful payment
      },
      modal: {
        ondismiss: () => {
          // This function is called when the user closes the Razorpay modal
          const alertMessage =
            language === "Hindi"
              ? "चिंता न करें, भुगतान की आवश्यकता नहीं है। यह डेवलपर्स के कौशल को दिखाने के लिए था। अब आप आगे बढ़ सकते हैं।"
              : "Don't worry, no payment is needed. This was to showcase the developer's skills. You can move on now and can still enjoy netflix.";
          alert(alertMessage);
          setShowNextButton(true); // Show the "Next" button after the alert
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const confirmPayment = () => {
    const successMessage =
      language === "Hindi"
        ? "भुगतान सफल! आप आगे बढ़ सकते हैं।"
        : "Payment successful! You can proceed.";

    if (window.confirm(successMessage)) {
      navigate("/paidcontent");
    }
  };

  const handlePayment = () => {
    const confirmationMessage =
      language === "Hindi"
        ? "क्या आप सुनिश्चित हैं? भुगतान के लिए OK दबाएं।"
        : "Are you sure? Press OK for payment.";

    if (window.confirm(confirmationMessage)) {
      createRazorpayOrder(1); // Trigger payment for 1 rs.
    }
  };

  const handleNext = () => {
    navigate("/paidcontent"); // Navigate to the next route
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="Netflix Logo" />
        <a className={styles.headerSignOut} href="/signout">
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </a>
      </div>

      {flashMessage && (
        <div className={styles.flashMessage}>{flashMessage}</div>
      )}

      <div className={styles.content1}>
        <div className={styles.box}>
          <div className={styles.dummyBox}>
            <p className={styles.dummyBoxPara}>🔒</p>
          </div>

          <div className={styles.box1}>
            <p className={styles.boxPara}>
              {language === "Hindi" ? "चरण 3 का 3" : "STEP 3 OF 3"}
            </p>
            <h2 className={styles.boxHeading}>
              {language === "Hindi"
                ? "भुगतान कैसे करें चुनें"
                : "Choose how to pay"}
            </h2>
          </div>

          <div className={styles.box2}>
            <p className={styles.box2Para}>
              {language === "Hindi"
                ? "आपका भुगतान एन्क्रिप्ट किया गया है और आप किसी भी समय अपना भुगतान विधि बदल सकते हैं।"
                : "Your payment is encrypted and you can change your payment method at any time."}
            </p>
          </div>

          <div className={styles.box3}>
            <p className={styles.box3Para}>
              {language === "Hindi"
                ? "शांति के लिए सुरक्षित। आसानी से ऑनलाइन रद्द करें।"
                : "Secure for peace of mind. Cancel easily online."}
            </p>
          </div>

          <div className={styles.box4}>
            <p className={styles.box4Para}>
              {language === "Hindi"
                ? "एंड-टू-एंड एन्क्रिप्टेड"
                : "End-to-end encrypted"}
            </p>
            <p className={styles.box4Img}>🔒</p>
          </div>

          <div className={styles.box5}>
            <div className={styles.box5Button2} onClick={handlePayment}>
              <div className={styles.box5Dummy1}>
                <p className={styles.box5Para1}>
                  {language === "Hindi" ? "यूपीआई ऑटोपे" : "UPI AutoPay"}
                </p>
                <img className={styles.box5Img1} src={bhim} alt="BHIM" />
                <img className={styles.box5Img2} src={paytm} alt="Paytm" />
                <img className={styles.box5Img3} src={phonepe} alt="PhonePe" />
                <img
                  className={styles.box5Img4}
                  src={amazonpay}
                  alt="Amazon Pay"
                />
                <img className={styles.box5Img5} src={gpay} alt="Google Pay" />
              </div>
              <div className={styles.box5Dummy2}>
                <p className={styles.box5Para2}> &gt; </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Message */}
      {flashMessage && (
        <div className={styles.flashMessage}>{flashMessage}</div>
      )}

      {/* Scanner Image (Initially Hidden) */}
      {showScanner && (
        <div className={styles.IMAGE} onClick={confirmPayment}>
          <img className={styles.image} src={scanner} alt="Scan for Payment" />
        </div>
      )}

      {/* Next Button (Shows after user dismisses the Razorpay modal) */}
      {showNextButton && (
        <button className={styles.nextButton} onClick={handleNext}>
          {language === "Hindi" ? "अगला" : "Next"}
        </button>
      )}

      <div className={styles.lastContent}>
        <p className={styles.netflixPara3}>
          {language === "Hindi" ? "प्रश्न? कॉल करें" : "Questions? Call"}{" "}
          <a className={styles.netflixContactno} href="contact">
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
              {language === "Hindi"
                ? "कॉर्पोरेट जानकारी"
                : "Corporate Information"}
            </a>
          </div>
          <div className={styles.content3Box1}>
            <a className={styles.content3Anchor} href="terms-of-use">
              {language === "Hindi" ? "उपयोग की शर्तें" : "Terms of Use"}
            </a>
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
    </div>
  );
};

export default Payment;