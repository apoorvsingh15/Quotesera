import React from "react";
import TopNav from "../components/TopNav";
import { Button } from "react-bootstrap";
const Home = ({ history }) => {
  const navigateToDimensions = () => {
    const { push } = history;
    push("/dimensions");
  };

  return (
    <div>
      <TopNav />
      <img
        className="banner-top"
        src={require("../assets/home-banner-bg.png")}
        alt="top-banner"
      />
      <Button onClick={navigateToDimensions}>Get Started</Button>
    </div>
  );
};

export default Home;
