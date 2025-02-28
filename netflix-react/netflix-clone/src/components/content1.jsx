import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import backgroundImage from "../assets/netflixlatestbg.jpg";
import Content2 from "./content2"; // Import Content2
import Content3 from "./content3";
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6"; 
import Content7 from "./content7";
 
const Content1 = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("English"); // Default language

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert(
        language === "English"
          ? "Please enter a valid email address!"
          : "कृपया एक मान्य ईमेल पता दर्ज करें!"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/check-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log("Response from server:", data);

      if (response.ok) {
        if (data.status === "exists") {
          navigate("/signin", { state: { email } });
        } else {
          navigate("/welcome", { state: { email } });
        }
      } else {
        alert(
          data.message ||
            (language === "English"
              ? "An unexpected error occurred."
              : "एक अप्रत्याशित त्रुटि हुई।")
        );
      }
    } catch (err) {
      alert(
        language === "English"
          ? "Server error. Please try again later."
          : "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="box"></div>
        <header className="header">
          <img className="netflix-logo" src={logo} alt="Netflix Logo" />
          <div id="netflix-header-button">
            <button id="netflix-header-button1">
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Hindi">हिन्दी</option>
              </select>
            </button>
            <button
              id="netflix-header-button2"
              onClick={() => navigate("/signin")}
            >
              {language === "English" ? "Sign In" : "साइन इन"}
            </button>
          </div>
        </header>

        <div className="main-content">
          <h1 id="main-title1">
            {language === "English"
              ? "Unlimited movies, TV shows and more"
              : "अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ"}
          </h1>
          <h2 id="main-title2">
            {language === "English"
              ? "Watch anywhere. Cancel anytime."
              : "कहीं भी देखें। कभी भी कैंसल करें।"}
          </h2>
          <h3 id="main-title3">
            {language === "English"
              ? "Ready to watch? Enter your email to create or restart your membership."
              : "देखने के लिए तैयार हैं? अपनी मेम्बरशिप शुरू करने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें।"}
          </h3>
        </div>

        <form id="loginForm2" className="first-button" onSubmit={handleSubmit}>
          <input
            id="EMAIL"
            type="email"
            placeholder={
              language === "English" ? "Email Address" : "ईमेल एड्रेस"
            }
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" id="last-sign-in-button" disabled={loading}>
            {loading
              ? language === "English"
                ? "Loading..."
                : "लोड हो रहा है..."
              : language === "English"
              ? "Get Started"
              : "शुरू करें"}
          </button>
        </form>
      </div>
      <div className="BOX"></div>
      {/* ✅ Pass language to Content components */}
      <Content2 language={language} />
      <Content3 language={language} />
      <Content4 language={language} />
      <Content5 language={language} />
      <Content6 language={language} />
      <Content7 language={language} />
    </div>
  ); 
};

export default Content1;