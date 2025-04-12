import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import styles from "./SignIn.module.css";
import logo from "../assets/logo.svg";
import backgroundimage from "../assets/netflixbg.jpg";

const SignIn = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  useEffect(() => {
    const storedLanguage =
      localStorage.getItem("selectedLanguage") || "English";
    setLanguage(storedLanguage);
  }, []); 

  const extractNameFromEmail = (email) => {
    if (!email) return "";
    const namePart = email.split("@")[0].split(".")[0];
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  };

  const validateForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://netflix-nvcs.onrender.com/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        const userName = extractNameFromEmail(email);
        localStorage.setItem("userName", userName);

        setFlashMessage(
          language === "Hindi"
            ? `फिर से स्वागत है, ${userName}!`
            : `Welcome again, ${userName}!`
        );

        setTimeout(() => {
          setFlashMessage("");
          navigate("/welcome2");
        }, 3000);
      } else {
        alert(
          response.data.message ||
            (language === "Hindi"
              ? "ईमेल या पासवर्ड गलत है।"
              : "Email or password is incorrect.")
        );
      }
    } catch (error) {
      alert(
        language === "Hindi"
          ? "कोई त्रुटि हुई। कृपया पुनः प्रयास करें।"
          : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.box}></div>
      <div className={styles.header}>
        <img className={styles.netflixlogo} src={logo} alt="Netflix Logo" />
      </div>

      <div className={styles.maincontent}>
        <div className={styles.dummyBOX}>
          <h1 className={styles.signinoptions}>
            {language === "Hindi" ? "साइन इन करें" : "Sign In"}
          </h1>

          {flashMessage && <p className={styles.flashMessage}>{flashMessage}</p>}

          <form className={styles.loginForm} onSubmit={validateForm}>
            <input
              className={styles.email}
              type="email"
              placeholder={language === "Hindi" ? "ईमेल" : "Email"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className={styles.passwordWrapper}>
              <input
                className={styles.password}
                type={showPassword ? "text" : "password"}
                placeholder={language === "Hindi" ? "पासवर्ड" : "Password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className={styles.signinbutton} disabled={loading}>
              {loading
                ? language === "Hindi"
                  ? "साइन इन हो रहा है..."
                  : "Signing In..."
                : language === "Hindi"
                ? "साइन इन करें"
                : "Sign In"}
            </button>
          </form>

          <p className={styles.ORpara}>{language === "Hindi" ? "या" : "OR"}</p>
          <button className={styles.sign2button}>
            {language === "Hindi"
              ? "साइन-इन कोड का उपयोग करें"
              : "Use a sign-in code"}
          </button>
          <a className={styles.resetpassword} href="#reset">
            {language === "Hindi" ? "पासवर्ड भूल गए?" : "Forgot Password?"}
          </a>
          <div className={styles.dummybox}>
            <input className={styles.markbox} type="checkbox" />
            <label className={styles.remember}>
              {language === "Hindi" ? "मुझे याद रखें" : "Remember me"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
