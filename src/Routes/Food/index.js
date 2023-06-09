import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { FoodArticle } from "./FoodArticle";
import { TopFood } from "./TopFood";
import AddFood from "./AddFood";
import { Logo, TopNavigation } from "../../Components";

const Food = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <div className="tech">
        <ContextFunction>
          <FoodArticle />
          <div>
            <TopFood />
            <br />
            <br />
            <br />
            <AddFood />
          </div>
        </ContextFunction>
      </div>
    </>
  );
};

export default Food;
