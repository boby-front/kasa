// Star.js
import React from "react";

const Star = ({ filled }) => {
  const fillColor = filled ? "$main-color" : "#dddcdc";

  return <i className="fa-solid fa-star" style={{ color: fillColor }}></i>;
};

export default Star;
