import React from "react";
import Banner from "../Component/Banner/Banner";
import Content from "../Component/BannerTwo/Content";
import BannerThree from "../Component/BannerThree/BannerThree";
import AllTask from "../Component/AllTask/AllTask";
import TaskInfo from "../Component/Taskinfo/TaskInfo";

const Home = () => {
  return (
    <div className="mt-14">
      <Banner></Banner>
      <Content></Content>
      <BannerThree></BannerThree>
      {/* <AllTask></AllTask> */}
      <TaskInfo></TaskInfo>
    </div>
  );
};

export default Home;
