import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { HollywoodArticle } from "./HollywoodArticle";
import { HollywoodTop } from "./HollywoodTop";
import { Logo, TopNavigation } from "../../Components";
import HollywoodAdd from "./HollywoodAdd";

const Hollywood = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <div className="tech">
        <ContextFunction>
          <HollywoodArticle />
          <div>
            <HollywoodTop />
            <br />
            <HollywoodAdd />
          </div>
        </ContextFunction>
      </div>
    </>
  );
};

export default Hollywood;
