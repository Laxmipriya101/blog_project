import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { Articlelist } from "./Articlelist";
const Bollywood = () => {
  return (
    <>
      <ContextFunction>
        <Articlelist />
      </ContextFunction>
    </>
  );
};

export default Bollywood;
