import React from "react";
import { Link } from "react-router-dom";
import "./toNavigation.style.css";
const TopNavigation = () => {
  return (
    <div className="nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/Bollywood"}>Bollywood</Link>
      <Link to={"/Technology"}>Technology</Link>
      <Link to={"/Food"}>Food</Link>
    </div>
  );
};

export default TopNavigation;
