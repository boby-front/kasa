import React from "react";
import "../sass/components/_banner.scss";

const Banner = ({ title, imageUrl }) => {
  const styles = {
    backgroundImage: `url("${imageUrl}")`,
  };

  return (
    <div className="banner" style={styles}>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
