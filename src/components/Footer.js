import React from "react";
import Logos from "./Logos";

const Footer = () => {
  return (
    <footer className="flexCenter flexJustifyCenter flexColumn">
      <Logos fillColor="#FFFFFF" height="50px" />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
