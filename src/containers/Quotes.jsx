import React from "react";

const Quotes = props => {
  console.log(props, "props");

  return (
    <div
      style={{
        height: props.location.state.height,
        width: props.location.state.width,
        textAlign: "center",
        color: "red",
        backgroundColor: "blue"
      }}
    >
      <h1>{props.location.state.mainQuote}</h1>
      <h6>{props.location.state.subQuote}</h6>
    </div>
  );
};

export default Quotes;
