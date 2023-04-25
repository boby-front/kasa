import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className="textCenter not-found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/home">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default Notfound;
