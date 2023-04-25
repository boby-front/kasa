import React, { useState } from "react";

const Caroussel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    setCurrentImageIndex((prevIndex) =>
      direction === "next"
        ? prevIndex === images.length - 1
          ? 0
          : prevIndex + 1
        : prevIndex === 0
        ? images.length - 1
        : prevIndex - 1
    );
  };

  const currentImage = images?.[currentImageIndex];

  const carousselStyle = currentImage && {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const counterStyle = {
    userSelect: "none",
  };

  const handleParentDoubleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="caroussel"
      style={{ ...carousselStyle, userSelect: "none" }}
      key={currentImageIndex}
      onDoubleClick={handleParentDoubleClick}
    >
      {images.length > 1 && (
        <>
          <svg
            className="arrow_left"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleImageChange("previous")}
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <svg
            className="arrow_right"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleImageChange("next")}
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </>
      )}

      {images && images.length > 1 && (
        <p style={counterStyle}>
          {currentImageIndex + 1}/{images.length}
        </p>
      )}
    </div>
  );
};

export default Caroussel;
