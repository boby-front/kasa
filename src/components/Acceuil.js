import React from "react";
import { Link } from "react-router-dom";
import data from "../data/announcement.json";

const Acceuil = () => {
  return (
    <section className="section-acceuil flexCenter flexWrap flexEvently">
      {data.map((obj, index) => (
        <Link
          to={"/anonces/" + obj.id}
          key={index}
          style={{ backgroundImage: "url(" + obj.cover + ")" }}
        >
          <h3>{obj.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default Acceuil;
