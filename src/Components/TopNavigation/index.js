import React from "react";
import { Link } from "react-router-dom";
const TopNavigation = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/Bollywood"}>Bollywood</Link>
      <Link to={"/Technology"}>Technology</Link>
      <Link to={"/Food"}>Food</Link>
    </>
  );
};

export default TopNavigation;
