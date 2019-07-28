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
      <img
        className="banner-top"
        src={require("../assets/home-banner-bg.jpg")}
        alt="top-banner"
      />
      <div className="middle-align">
        <h1 className="front-heading">Quotesera</h1>
        <p className="front-para">
          Make beautiful precise quotes or just copy and edit them
        </p>
        <div style={{ textAlign: "center" }}>
          <Button onClick={navigateToDimensions}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
