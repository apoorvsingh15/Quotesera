import React, { Fragment, useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
const API_URL = "https://api.pexels.com/v1/";

const Quotes = ({ location: { state = {} } }) => {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${API_URL}curated?per_page=15&page=${Math.floor(Math.random() * 1000) +
  //         1}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "563492ad6f91700001000001afc9aaa8043b4825be7232b032c80a6d"
  //         }
  //       }
  //     )
  //     .then(response => setApiResponse(response), setGotResponse(true))
  //     .catch(error => console.log(error, "<===="));
  // }, []);
  const inputEl = useRef(null);
  const [textInputValue, setTextInputValue] = useState(10);
  const [largeTextInputValue, setLargeTextInputValue] = useState(20);
  // const [apiResponse, setApiResponse] = useState({});
  // const [gotResponse, setGotResponse] = useState(false);
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
      <Container>
        <Row>
          <Col>
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
              <p
                style={{
                  fontSize: largeTextInputValue,
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {state.mainQuote}
              </p>
              <p
                style={{
                  fontSize: textInputValue,
                  position: "relative",
                  float: " left",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {state.subQuote}
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ width: "200px", marginLeft: 100 }}>
              <InputRange
                maxValue={50}
                minValue={20}
                value={largeTextInputValue}
                onChange={value => setLargeTextInputValue(value)}
              />
              <InputRange
                maxValue={20}
                minValue={10}
                value={textInputValue}
                onChange={value => setTextInputValue(value)}
              />
              <button onClick={onButtonClick}>Download</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Quotes;
