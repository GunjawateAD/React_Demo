import React from "react";
import "./LandingPage.css";
import styles from "./Mystyles.module.css";

function landingpage1() {
  const myNewDiv = {
    color: "red",
    backgroundColor: "black",
    width: "200px",
    height: "200px",
  };
  return (
    <div style={{ color: "white", backgroundColor: "darkgray" }}>
      LandingPage
      <div style={myNewDiv}>Avishkar</div>
      <div className="heading1">External css</div>
      <div className={styles.heading2}>checking module</div>
    </div>
  );
}

export default landingpage1;
