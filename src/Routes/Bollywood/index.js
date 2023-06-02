import React from "react";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import { Articlelist } from "./Articlelist";
import { TopPost } from "./TopPost";
import Addv from "./Addv";
import { Logo, TopNavigation } from "../../Components";

const Bollywood = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <div className="bollywood">
        <ContextFunction>
          <Articlelist />

          <div>
            <TopPost />
            <br />
            <br />
            <br />
            <Addv />
          </div>
        </ContextFunction>
      </div>
    </>
  );
};

export default Bollywood;
