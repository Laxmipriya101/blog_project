import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import {
  Home,
  Bollywood,
  Food,
  Technology,
  Hollywood,
  Fitness,
} from "../Routes";
import { DetailsBlog } from "../Routes/CommanPage/DetailsBlog";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Bollywood/:id" element={<DetailsBlog />} />

        <Route path="/Food" element={<Food />} />
        <Route path="/Food/:id" element={<DetailsBlog />} />

        <Route path="/Hollywood" element={<Hollywood />} />
        <Route path="/Hollywood/:id" element={<DetailsBlog />} />

        <Route path="/Technology" element={<Technology />} />
        <Route path="/Technology/:id" element={<DetailsBlog />} />

        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Fitness/:id" element={<DetailsBlog />} />
        <Route path="/Home/:id" element={<DetailsBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
