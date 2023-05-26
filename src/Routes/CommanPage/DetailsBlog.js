import React from "react";
import { useLocation } from "react-router-dom";

export const DetailsBlog = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <div>
      DetailsBlog
      <div>{loc.state.Overview}</div>
      <img src={loc.state.img} alt="no photo" />
    </div>
  );
};
