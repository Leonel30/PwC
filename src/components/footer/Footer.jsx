import React from "react";
import "./footer.css";
import logoDark from "../../assets/logoDark.png";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logoDark} alt="logo_dark" />
        <span>PwC Colombia</span>
      </div>
      <span>©2022 all rights reserverd </span>
    </footer>
  );
};
