import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home, Bollywood, Food } from "../Routes";
import { DetailsBlog } from "../Routes/CommanPage/DetailsBlog";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Bollywood/:id" element={<DetailsBlog />} />

        <Route path="/Food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
