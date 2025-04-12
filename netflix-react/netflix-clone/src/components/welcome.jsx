import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./welcome.module.css";
import logo from "../assets/logo.svg";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(true);
  const [flashMessage, setFlashMessage] = useState("");
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (!email) {
      navigate("/");
      return;
    }

    const checkEmailExists = async () => {
      try {
        const response = await fetch("https://netflix-0cfk.onrender.com/api/auth/check-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (data.exists) {
          navigate("/signin", { state: { email } });
        } else {
          setCheckingEmail(false);
        }
      } catch (error) {
        console.error("Error checking email:", error);
        setFlashMessage("Error checking email. Please try again.");
        setTimeout(() => setFlashMessage(""), 3000);
      }
    };

    checkEmailExists();
  }, [email, navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setFlashMessage(
        language === "Hindi" ? "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।" : "Password must be at least 6 characters long."
      );
      setTimeout(() => setFlashMessage(""), 3000);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://netflix-nvcs.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setFlashMessage(
          language === "Hindi" ? "🎉 पंजीकरण सफल! नेटफ्लिक्स में आपका स्वागत है।" : "🎉 Registration successful! Welcome to Netflix."
        );
        setTimeout(() => {
          setFlashMessage(" ");
          navigate("/verify", { state: { email } });
        }, 3000);
      } else {
        setFlashMessage(data.message || (language === "Hindi" ? "कुछ गलत हो गया!" : "Something went wrong!"));
        setTimeout(() => setFlashMessage(""), 3000);
      }
    } catch (err) {
      setFlashMessage(language === "Hindi" ? "सर्वर त्रुटि। कृपया बाद में प्रयास करें।" : "Server error. Please try again later.");
      setTimeout(() => setFlashMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  if (checkingEmail) {
    return <p className={styles.loading}>{language === "Hindi" ? "ईमेल की जांच हो रही है..." : "Checking email..."}</p>;
  }

  return (
    <div className={styles.container}>
      {flashMessage && <div className={styles.flashMessage}>{flashMessage}</div>}
      <div className={styles.header}>
        <img className={styles.netflixlogo} src={logo} alt="Netflix Logo" />
       <p className={styles.headersignout} onClick={() => navigate("/signout")}>
          {language === "Hindi" ? "साइन आउट" : "Sign Out"}
        </p>
      </div>
      <div className={styles.content1}>
        <div className={styles.box}>
          <p className={styles.boxpara}>{language === "Hindi" ? "चरण 1 का 3" : "STEP 1 OF 3"}</p>
          <h2 className={styles.boxheading}>{language === "Hindi" ? "वापसी पर स्वागत है!" : "Welcome back!"}</h2>
          <h2 className={styles.boxheading}>{language === "Hindi" ? "नेटफ्लिक्स फिर से जॉइन करना आसान है।" : "Rejoining Netflix is easy."}</h2>
          <p className={styles.BOXpara}>{language === "Hindi" ? "अपना पासवर्ड डालें और आप जल्द ही देख पाएंगे।" : "Enter your password and you'll be watching in no time."}</p>
          <p className={styles.email}>{language === "Hindi" ? "ईमेल" : "Email"}</p>
          <p className={styles.mail}>{email}</p>
          <div className={styles.BOX}>
            <form id="loginForm" onSubmit={handleFormSubmit}>
              <div className={styles.passwordWrapper}>
                <input
                  className={styles.password}
                  type={passwordVisible ? "text" : "password"}
                  placeholder={language === "Hindi" ? "अपना पासवर्ड बनाएँ" : "Create your password"}
                  required
                  onChange={handlePasswordChange}
                  value={password}
                />
                <button type="button" onClick={togglePasswordVisibility} className={styles.passwordToggle}>
                  {passwordVisible ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              <a href="/forgotpassword" className={styles.formanchor}>
                {language === "Hindi" ? "क्या आप अपना पासवर्ड भूल गए?" : "Forgot your password?"}
              </a>
              <button type="submit" className={styles.signinbutton} disabled={loading}>
                {loading ? (language === "Hindi" ? "प्रक्रिया हो रही है..." : "Processing...") : (language === "Hindi" ? "अगला" : "Next")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
