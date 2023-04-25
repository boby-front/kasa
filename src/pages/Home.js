import React from "react";
import Banner from "../components/Banner";
import Acceuil from "../components/Acceuil";
import backgroundImage from "../assets/images/IMG.jpg";

const Home = () => {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        imageUrl={backgroundImage}
      />
      <Acceuil />
    </div>
  );
};

export default Home;
