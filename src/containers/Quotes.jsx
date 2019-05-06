import React, { Fragment, useRef } from "react";
import html2canvas from "html2canvas";
const Quotes = ({
  location: {
    state: { height, width, mainQuote, subQuote }
  }
}) => {
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
          height: height ? height : 1080,
          width: width ? width : 1080,
          textAlign: "center",
          color: "red",
          backgroundColor: "blue"
        }}
      >
        <h1>{mainQuote}</h1>
        <h6>{subQuote}</h6>
        <button onClick={onButtonClick}>dfdf</button>
      </div>
    </Fragment>
  );
};

export default Quotes;
