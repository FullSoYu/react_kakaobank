import React from "react";
import TopBar from "../components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/TopBar.scss";

const Location = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <div>hi!</div>
      </Routes>
    </BrowserRouter>
  );
};

export default Location;
