import React, { Fragment, useRef } from "react";
import html2canvas from "html2canvas";
const Quotes = ({ location: { state = {} } }) => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    html2canvas(inputEl.current).then(function(canvas) {
      return document.body.appendChild(canvas);
    });
  };

  return (
    <Fragment>
      <div
        ref={inputEl}
        style={{
          height: state.height ? state.height : 1080,
          width: state.width ? state.width : 1080,
          textAlign: "center",
          color: "red",
          backgroundImage: `url(${require("../assets/home-banner-bg.png")})`
        }}
      >
        <h1>{state.mainQuote}</h1>
        <h6>{state.subQuote}</h6>
        <button onClick={onButtonClick}>Download</button>
      </div>
    </Fragment>
  );
};

export default Quotes;
