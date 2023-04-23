import React from "react";
import Logo from "./Logos";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flexCenter flexBetween">
      <Logo />
      <ul className="flexCenter">
        <NavLink
          to="/"
          activeClassName="active-link"
          activeStyle={{ borderBottom: "3px solid red" }}
        >
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/"
          activeClassName="active-link"
          activeStyle={{ borderBottom: "3px solid red" }}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
