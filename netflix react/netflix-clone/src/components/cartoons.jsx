import React from "react";
import styles from "./cartoons.module.css";
import logo from "../assets/logo.svg";
import bheem from "../assets/chota Bheem Top.png";
import motupatlu from "../assets/motu Patlu Top.png";
import shinchan from "../assets/shinchan Top.png";
import tomnjerry from "../assets/tom And Jerry Top.png";
import doraemon from "../assets/doraemon Top.png";
import shiva from "../assets/shiva Top.png";
import hattori from "../assets/hattori Top.png";
import bean from "../assets/mr Bean Top.png";
import oggy from "../assets/oggy And Cockroach Top.png";
import junglebook from "../assets/jungle Book Top.png";
import { useNavigate } from "react-router-dom";

const Cartoons = () => {
  const navigate = useNavigate(); 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.netflixLogo} src={logo} alt="keg.hsf" />
        <a className={styles.headerSignOut} href="/signout">
          Sign Out
        </a>
      </div>

      <div className={styles.box}>
        <img className={styles.img} src={bheem} alt="chota bheem" />
        <img className={styles.img} src={motupatlu} alt="motu patlu" />
        <img className={styles.img} src={shinchan} alt="shinchan" />
        <img className={styles.img} src={tomnjerry} alt="tom and jerry" />
        <img className={styles.img} src={doraemon} alt="doraemon" />
        <img className={styles.img} src={shiva} alt="shiva" />
        <img className={styles.img} src={hattori} alt="ninja hattori" />
        <img className={styles.img} src={bean} alt="mr bean" />
        <img className={styles.img} src={oggy} alt="oggy and the cockroach" />
        <img className={styles.img} src={junglebook} alt="jungle book" />
      </div>
    </div>
  );
};

export default Cartoons;
