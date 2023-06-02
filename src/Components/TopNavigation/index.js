import React from "react";
import { Link } from "react-router-dom";
import "./toNavigation.style.css";
const TopNavigation = () => {
  return (
    <div className="nav">
      <Link to={"/"} className="texthome">
        Home
      </Link>
      <Link to={"/Bollywood"} className="texthome">
        Bollywood
      </Link>
      <Link to={"/Technology"} className="texthome">
        Technology
      </Link>
      <Link to={"/Hollywood"} className="texthome">
        Hollywood
      </Link>
      <Link to={"/Fitness"} className="texthome">
        Fitness
      </Link>
      <Link to={"/Food"} className="texthome">
        Food
      </Link>
    </div>
  );
};

export default TopNavigation;
