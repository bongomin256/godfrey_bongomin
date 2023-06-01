import React from "react";
import AboutHome from "../component/about/AboutHome";
import HomePageLayout from "../component/homePageLayout/HomePageLayout";
import ProjectHome from "../component/projects/ProjectHome";

const Home = () => {
  return (
    <HomePageLayout>
      {/* <h1>This is where everything else will go</h1> */}
      <AboutHome />
      <ProjectHome />
    </HomePageLayout>
  );
};

export default Home;
