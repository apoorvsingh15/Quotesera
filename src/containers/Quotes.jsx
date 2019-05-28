import React, { Fragment, useRef } from "react";
import html2canvas from "html2canvas";
const Quotes = ({ location: { state = {} } }) => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    html2canvas(inputEl.current, { scale: window.devicePixelRatio * 1.2 }).then(
      function(canvas) {
        document.body.appendChild(canvas).toDataURL("image/png");
        return document.write(
          '<img src="' +
            document.body.appendChild(canvas).toDataURL("image/png") +
            '"/>'
        );
      }
    );
  };

  return (
    <Fragment>
      <div
        ref={inputEl}
        style={{
          margin: "0 auto",
          height: state.height ? state.height : 1080,
          width: state.width ? state.width : 1080,
          textAlign: "center",
          color: "red",
          backgroundImage: `url(${require("../assets/test.jpg")})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1>{state.mainQuote}</h1>
        <h6>{state.subQuote}</h6>
      </div>
      <button onClick={onButtonClick}>Download</button>
    </Fragment>
  );
};

export default Quotes;
