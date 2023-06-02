import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { FitArticle } from "./FitArticle";
import { TopFit } from "./TopFit";
import { Logo, TopNavigation } from "../../Components";
import AddFit from "./AddFit";

const Fitness = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <div className="tech">
        <ContextFunction>
          <FitArticle />
          <div>
            <TopFit />
            <br />
            <AddFit />
          </div>
        </ContextFunction>
      </div>
    </>
  );
};

export default Fitness;
