import React, { useState } from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Dimensions = props => {
  const [dimensions, setDimensions] = useState({ width: 1080, height: 1080 });

  const getDimensions = platform => {
    return platform === "instagram-square"
      ? setDimensions({ width: 940, height: 700 })
      : setDimensions({ width: 940, height: 1334 });
  };

  const navigateToAddText = () => {
    props.history.push("./add-text", dimensions);
  };

  console.log(dimensions, "yo");

  return (
    <div>
      <Jumbotron>
        <h1>Select any platform</h1>
        <Button
          className="spacing"
          onClick={() => getDimensions("instagram-square")}
        >
          Instagram Square Post
        </Button>
        <Button
          className="spacing"
          onClick={() => getDimensions("instagram-story")}
        >
          Instagram Story
        </Button>
        <Button className="spacing" onClick={navigateToAddText}>
          OK
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Dimensions;
