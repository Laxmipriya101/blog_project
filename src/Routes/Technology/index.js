import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { TechArt } from "./TechArt";
import { TechTop } from "./TechTop";
import "../../App.css";
import TechAdd from "./TechAdd";
import { Logo, TopNavigation } from "../../Components";

const Technology = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <div className="tech">
        <ContextFunction>
          <TechArt />
          <div>
            <TechTop />
            <br />
            <TechAdd />
          </div>
        </ContextFunction>
      </div>
    </>
  );
};

export default Technology;
