import React from "react";
import Banner from "../Component/Banner/Banner";
import Content from "../Component/BannerTwo/Content";
import BannerThree from "../Component/BannerThree/BannerThree";
import AllTask from "../Component/AllTask/AllTask";

const Home = () => {
  return (
    <div className="mt-[72px]">
      <Banner></Banner>
      <Content></Content>
      <BannerThree></BannerThree>
      <AllTask></AllTask>
    </div>
  );
};

export default Home;
