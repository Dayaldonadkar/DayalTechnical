import React from "react";

import Welcome from "../Components/Home/Welcome";
import Features from "../Components/Home/Features";
import GetStarted from "../Components/Home/GetStarted";

const Home = () => {
  return (
    <div className="">
      <Welcome />
      <Features />
      <GetStarted />
    </div>
  );
};

export default Home;
