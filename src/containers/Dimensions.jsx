import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Dimensions = props => {
  const [dimensions, setDimensions] = useState({ width: 1080, height: 1080 });

  const getDimensions = platform => {
    return platform === "instagram-square"
      ? setDimensions({ width: 1080, height: 1080 })
      : setDimensions({ width: 750, height: 1334 });
  };

  const navigateToAddText = () => {
    props.history.push("./add-text", dimensions);
  };

  console.log(dimensions, "yo");

  return (
    <div>
      <Button onClick={() => getDimensions("instagram-square")}>
        Instagram Square Post
      </Button>
      <Button onClick={() => getDimensions("instagram-story")}>
        Instagram Story
      </Button>
      <Button onClick={navigateToAddText}>OK</Button>
    </div>
  );
};

export default Dimensions;
