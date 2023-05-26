import React from "react";
import { Logo, TopNavigation } from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import LatestStories from "./LatestStories";

const Home = () => {
  return (
    <>
      <Logo />
      <TopNavigation />
      <Banner />
      <Latest />
      <LatestArticle />
      <LatestStories />
    </>
  );
};

export default Home;
