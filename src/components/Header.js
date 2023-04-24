import React, { useEffect, useState } from "react";
import Logo from "./Logos";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/home");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="flexCenter flexBetween">
      <Logo fillColor="#FF6060" />
      <ul className="flexCenter">
        <li>
          <NavLink
            to="/home"
            className={`nav-link ${
              activeLink === "/home" ? "active-link" : ""
            }`}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`nav-link ${
              activeLink === "/about" ? "active-link" : ""
            }`}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
