import React from "react";
import TopNav from "../components/TopNav";
const Home = () => (
  <div>
    <TopNav />
    <img
      className="banner-top"
      src={require("../assets/home-banner-bg.png")}
      alt="top-banner"
    />
  </div>
);

export default Home;
