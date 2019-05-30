import React, { Fragment, useRef, useState } from "react";
import html2canvas from "html2canvas";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Quotes = ({ location: { state = {} } }) => {
  const inputEl = useRef(null);
  const [textInputValue, setTextInputValue] = useState(20);
  console.log(textInputValue);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    html2canvas(inputEl.current, {
      scale: window.devicePixelRatio * 1.2
    }).then(function(canvas) {
      document.body.appendChild(canvas).toDataURL("image/png");
      return document.write(
        '<img src="' +
          document.body.appendChild(canvas).toDataURL("image/png") +
          '"/>'
      );
    });
  };

  return (
    <Fragment>
      <div
        ref={inputEl}
        style={{
          textAlign: "center",

          height: state.height ? state.height : 1080,
          width: state.width ? state.width : 1080,
          color: "red",
          backgroundImage: `url(${require("../assets/test.jpg")})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1 style={{ fontSize: textInputValue }}>{state.mainQuote}</h1>
        <h6 style={{ fontSize: textInputValue }}>{state.subQuote}</h6>
      </div>
      <div style={{ width: "200px", marginLeft: 100 }}>
        <InputRange
          maxValue={50}
          minValue={20}
          value={textInputValue}
          onChange={value => setTextInputValue(value)}
        />
        <button onClick={onButtonClick}>Download</button>
      </div>
    </Fragment>
  );
};

export default Quotes;
