import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Star from "../components/Star";
import Collapse from "../components/Collapse";
import NotFound from "./Notfound";
import data from "../data/announcement.json";

const Annonce = () => {
  const { id } = useParams();
  const annonce = data.find((obj) => obj.id === id);

  if (!annonce) {
    return <NotFound />;
  }

  const images = annonce["des photos"];
  const rating = annonce.note;

  const circleStyle = {
    backgroundImage: `url("${annonce.héberger.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Caroussel images={images} />

      <section className="section-anonce">
        <div className="flexCenter" id="name-cercle-container">
          <div className="flexColumn">
            <p className="name">{annonce.héberger.name.split(" ")[0]}</p>
            <p className="lastName">{annonce.héberger.name.split(" ")[1]}</p>
          </div>
          <div className="cercle" style={circleStyle}></div>
        </div>
        <h2 id="title">{annonce.title}</h2>
        <p className="location">{annonce.location}</p>

        <div className="key-icon-container flexCenter flexBetween">
          <div className="key-word-container flexCenter flexWrap">
            {annonce["Mots clés"].map((keyword, index) => (
              <span key={index} className="textCenter">
                {keyword}
              </span>
            ))}
          </div>
          <div className="star-container">
            <Star filled={rating >= 1} />
            <Star filled={rating >= 2} />
            <Star filled={rating >= 3} />
            <Star filled={rating >= 4} />
            <Star filled={rating >= 5} />
          </div>
        </div>

        <div className="collapse-container flexBetween">
          <Collapse title="Description">{annonce.description}</Collapse>
          <Collapse title="Équipements">{annonce.équipements}</Collapse>
        </div>
      </section>
    </div>
  );
};

export default Annonce;
