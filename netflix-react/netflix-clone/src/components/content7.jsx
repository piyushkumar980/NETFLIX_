import "../App.css";
import React from "react";

const Content7 = () => {
  return (
    <div class="content7">
      <div class="content7-top">
        <span>Questions? Call</span>
        <a href="">000-800-919-1694</a>
      </div>

      <div class="content7-main"> 
        <div class="content7-main-box">
          <a href="">FAQ</a>
          <a href="">Investor Relations</a> 
          <a href="">Privacy</a>
          <a href="">Speed Test</a>
        </div>  

        <div class="content7-main-box">
          <a href="">Help Centre</a>
          <a href="">Jobs</a>
          <a href="">Cookie Preferences</a>
          <a href="">Legal Notices</a>
        </div>

        <div class="content7-main-box">
          <a href="">Account</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Netflix</a>
        </div>

        <div class="content7-main-box">
          <a href="">Media Centre</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
        </div>
      </div>

      <div class="netflix-main-button">
        <button class="netflix-main-button1">
          <select class="LANGUAGE" name="languagelist" form="languageform">
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
          </select>
        </button>
      </div> 

      <p class="netflix-last-content">Netflix India</p>
    </div>
  );
};
export default Content7;
