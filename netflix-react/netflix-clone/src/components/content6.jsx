import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Content6 = ({ language }) => {
  const [openAnswer, setOpenAnswer] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle function to show/hide answers
  const toggleAnswer = (index) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert(
        language === "Hindi"
          ? "कृपया एक वैध ईमेल पता दर्ज करें!"
          : "Please enter a valid email address!"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://netflix-0cfk.onrender.com/api/auth/check-email",
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
        } else if (data.status === "new") {
          navigate("/welcome", { state: { email } });
        }
      } else {
        alert(
          data.message ||
            (language === "Hindi"
              ? "एक अप्रत्याशित त्रुटि हुई।"
              : "An unexpected error occurred.")
        );
      }
    } catch (err) {
      alert(
        language === "Hindi"
          ? "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।"
          : "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content6" id="content6">
        <h1 className="content6-heading">
          {language === "Hindi"
            ? "अक्सर पूछे जाने वाले प्रश्न"
            : "Frequently Asked Questions"}
        </h1>

        {/* QUESTION 1 */} 
        <button
          className="content6-button"
          id="toggleButton"
          onClick={() => toggleAnswer(1)}
        >
          <span className="content6-span-1">
            {language === "Hindi" ? "नेटफ्लिक्स क्या है?" : "What is Netflix?"}
          </span> 
          <span className="content6-span-2" id="symbol">
            {openAnswer === 1 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 1 && (
          <div id="answer">
            <p>
              {language === "Hindi"
                ? "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट-कनेक्टेड डिवाइसों पर पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है।"
                : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices."}
            </p>
            <br />
            <p>
              {language === "Hindi"
                ? "आप जब चाहें, जितना चाहें देख सकते हैं, बिना किसी विज्ञापन के – वह भी एक किफायती मासिक कीमत पर। हमेशा कुछ नया देखने को मिलता है, और हर हफ्ते नए टीवी शो और फिल्में जोड़ी जाती हैं!"
                : "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}
            </p>
          </div>
        )}

        {/* QUESTION 2 */}
        <button
          className="content6-button1"
          id="toggleButton1"
          onClick={() => toggleAnswer(2)}
        >
          <span className="content6-span-1">
            {language === "Hindi"
              ? "नेटफ्लिक्स की कीमत कितनी है?"
              : "How much does Netflix cost?"}
          </span>
          <span className="content6-span-2" id="symbol1">
            {openAnswer === 2 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 2 && (
          <div id="answer1">
            <p>
              {language === "Hindi"
                ? "अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें, वह भी एक निश्चित मासिक शुल्क पर। योजनाएँ ₹149 से ₹649 प्रति माह तक उपलब्ध हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।"
                : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."}
            </p>
          </div>
        )}

        {/* QUESTION 3 */}
        <button
          className="content6-button2"
          id="toggleButton2"
          onClick={() => toggleAnswer(3)}
        >
          <span className="content6-span-1">
            {language === "Hindi"
              ? "मैं नेटफ्लिक्स कहाँ देख सकता हूँ?"
              : "Where can I watch?"}
          </span>
          <span className="content6-span-2" id="symbol2">
            {openAnswer === 3 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 3 && (
          <div id="answer2">
            <p>
              {language === "Hindi"
                ? "कहीं भी, कभी भी देखें। अपने नेटफ्लिक्स अकाउंट से साइन इन करें और अपने व्यक्तिगत कंप्यूटर पर netflix.com पर या किसी भी इंटरनेट से जुड़े डिवाइस पर, जो नेटफ्लिक्स ऐप प्रदान करता है, तुरंत देखना शुरू करें।"
                : "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."}
            </p>
            <br />
            <p>
              {language === "Hindi"
                ? "आप iOS या Android ऐप के जरिए अपने पसंदीदा शो डाउनलोड भी कर सकते हैं। चलते-फिरते देखने के लिए डाउनलोड का उपयोग करें।"
                : "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go."}
            </p>
          </div>
        )}

        {/* QUESTION 4 */}
        <button
          className="content6-button3"
          id="toggleButton3"
          onClick={() => toggleAnswer(4)}
        >
          <span className="content6-span-1">
            {language === "Hindi"
              ? "मैं नेटफ्लिक्स कैसे रद्द कर सकता हूँ?"
              : "How do I cancel?"}
          </span>
          <span className="content6-span-2" id="symbol3">
            {openAnswer === 4 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 4 && (
          <div id="answer3">
            <p>
              {language === "Hindi"
                ? "नेटफ्लिक्स लचीला है। यहां कोई झंझट भरे अनुबंध या बाध्यताएँ नहीं हैं। आप केवल दो क्लिक में आसानी से अपना खाता ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं है – जब चाहें अपना खाता शुरू या बंद करें।"
                : "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}
            </p>
          </div>
        )}

        {/* QUESTION 5 */}
        <button
          className="content6-button4"
          id="toggleButton4"
          onClick={() => toggleAnswer(5)}
        >
          <span className="content6-span-1">
            {language === "Hindi"
              ? "मैं Netflix पर क्या देख सकता हूँ?"
              : "What can I watch on Netflix?"}
          </span>
          <span className="content6-span-2" id="symbol4">
            {openAnswer === 5 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 5 && (
          <div id="answer4">
            <p>
              {language === "Hindi"
                ? "नेटफ्लिक्स के पास फीचर फिल्मों, डॉक्यूमेंट्री, टीवी शो, एनीमे, पुरस्कार विजेता नेटफ्लिक्स ओरिजिनल्स और बहुत कुछ की विस्तृत लाइब्रेरी है। जितना चाहें, जब चाहें देखें।"
                : "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix  originals, and more. Watch as much as you want, anytime you want."}
            </p>
          </div>
        )}

        {/* QUESTION 6 */}
        <button
          className="content6-button5"
          id="toggleButton5"
          onClick={() => toggleAnswer(6)}
        >
          <span className="content6-span-1">
            {language === "Hindi"
              ? "क्या Netflix बच्चों के लिए अच्छा है?"
              : "Is Netflix good for kids?"}
          </span>
          <span className="content6-span-2" id="symbol5">
            {openAnswer === 6 ? "×" : "+"}
          </span>
        </button>
        {openAnswer === 6 && (
          <div id="answer5">
            <p>
              {language === "Hindi"
                ? "नेटफ्लिक्स किड्स अनुभव आपकी सदस्यता में शामिल है, जिससे माता-पिता को नियंत्रण मिलता है जबकि बच्चे अपने लिए उपयुक्त पारिवारिक टीवी शो और फिल्मों का आनंद ले सकते हैं।"
                : "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}
            </p>
            <br />
            <p>
              {language === "Hindi"
                ? "किड्स प्रोफाइल में पिन-संरक्षित अभिभावकीय नियंत्रण शामिल होते हैं, जो आपको यह सीमित करने की अनुमति देते हैं कि बच्चे किस परिपक्वता स्तर की सामग्री देख सकते हैं और उन विशिष्ट शीर्षकों को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते कि बच्चे देखें।"
                : "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
            </p>
          </div>
        )} 

        <h3 className="content6-last-heading">
          {language === "Hindi"
            ? "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः प्रारंभ करने के लिए अपना ईमेल दर्ज करें।"
            : "Ready to watch? Enter your email to create or restart your membership."}
        </h3>

        <form id="loginForm2" onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder={language === "Hindi" ? "ईमेल पता" : "Email Address"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" id="last-sign-in-button" disabled={loading}>
            {loading
              ? language === "Hindi"
                ? "लोड हो रहा है..."
                : "Loading..."
              : language === "Hindi"
              ? "शुरू करें"
              : "Get Started"}
          </button>
        </form>
      </div>
      <div className="BOX"></div>
    </>
  );
};

export default Content6;




















