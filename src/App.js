import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* patch="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
