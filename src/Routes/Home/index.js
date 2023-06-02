import React from "react";
import { Logo, TopNavigation } from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import { ContextFunction } from "../../Utility/ContextStore/ContextAPI";
import "../../App.css";
import LatestArticle from "./LatestArticle";
import Addv from "../Bollywood/Addv";
import HomeTop from "./HomeTop";
import LatestStories from "./LatestStories";
const Home = () => {
  return (
    <div className="homeContainer">
      <ContextFunction>
        <Logo />
        <TopNavigation />
        <Banner />
        <Latest />
        <div className="article ">
          <div className="story">
            <div>
              <LatestArticle />
              <LatestStories />
            </div>
            <div>
              <Addv />
              <HomeTop />
            </div>
          </div>
        </div>
      </ContextFunction>
    </div>
  );
};

export default Home;
