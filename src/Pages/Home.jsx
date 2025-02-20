import React from "react";
import Banner from "../Component/Banner/Banner";
import Content from "../Component/BannerTwo/Content";
import BannerThree from "../Component/BannerThree/BannerThree";

const Home = () => {
  return (
    <div className="mt-12">
      <Banner></Banner>
      <Content></Content>
      <BannerThree></BannerThree>
    </div>
  );
};

export default Home;
