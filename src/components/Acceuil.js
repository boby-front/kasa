import React from "react";
import data from "../data/announcement.json";

const Acceuil = () => {
  return (
    <section className="section-acceuil flexCenter flexWrap flexEvently">
      {data.map((obj, index) => (
        <article key={index} style={{ backgroundImage: `url(${obj.cover})` }}>
          <h3>{obj.title}</h3>
        </article>
      ))}
    </section>
  );
};

export default Acceuil;
