import React from "react";
import Header from "../components/Header";
import BannerAcceuil from "../components/BannerAcceuil";
import Acceuil from "../components/Acceuil";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerAcceuil />
      <Acceuil />
      <Footer />
    </div>
  );
};

export default Home;
