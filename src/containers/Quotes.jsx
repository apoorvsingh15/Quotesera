import React, { Fragment, useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import axios from "axios";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { SketchPicker } from "react-color";

const API_URL = "https://api.pexels.com/v1/";

const Quotes = ({ location: { state = {} } }) => {
  useEffect(() => {
    axios
      .get(
        `${API_URL}curated?per_page=15&page=${Math.floor(Math.random() * 300) +
          1}`,
        {
          headers: {
            Authorization:
              "563492ad6f91700001000001afc9aaa8043b4825be7232b032c80a6d",
            "Content-Type": "text/html"
          }
        }
      )
      .then(response => setApiResponse(response), setGotResponse(true))
      .catch(error => console.log(error, "<===="));
  }, []);

  const inputEl = useRef(null);
  const [textInputValue, setTextInputValue] = useState(10);
  const [chooseColorSmall, setChooseColorSmall] = useState(false);
  const [chooseColorLarge, setChooseColorLarge] = useState(false);
  const [largeTextInputValue, setLargeTextInputValue] = useState(20);
  const [largeTextInputColor, setLargeTextInputColor] = useState("red");
  const [textInputColor, setTextInputColor] = useState("red");
  const [fontStyle, setFontStyle] = useState("normal");
  const [apiResponse, setApiResponse] = useState({});
  const [gotResponse, setGotResponse] = useState(false);
  console.log(textInputColor, "<---response");

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    html2canvas(inputEl.current, {
      scale: window.devicePixelRatio * 1.2,
      allowTaint: false,
      useCORS: true
    }).then(function(canvas) {
      document.body.appendChild(canvas).toDataURL("image/png");
      return document.write(
        '<img src="' +
          document.body.appendChild(canvas).toDataURL("image/png") +
          '"/>'
      );
    });
  };

  const onButtonChooseColorSmallClick = () => {
    setChooseColorSmall(!chooseColorSmall);
    setChooseColorLarge(false);
  };

  const onButtonChooseColorLargeClick = () => {
    setChooseColorSmall(false);
    setChooseColorLarge(!chooseColorLarge);
  };

  const onClickFontStyle = () => {
    setFontStyle(prevState => (prevState === "normal" ? "italic" : "normal"));
  };

  console.log(
    apiResponse,
    `url(${apiResponse &&
      apiResponse.data &&
      apiResponse.data.photos &&
      apiResponse.data.photos.length &&
      apiResponse.data.photos[0].url})`,
    "<-----res"
  );

  return (
    <Fragment>
      {!gotResponse ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Container>
          <h1 className="editor-style">Quotesera Editor</h1>
          <Row>
            <Col lg={8}>
              <div
                ref={inputEl}
                style={{
                  textAlign: "center",
                  height: state.height ? state.height : 940,
                  width: state.width ? state.width : 940,
                  backgroundImage: `url(${apiResponse &&
                    apiResponse.data &&
                    apiResponse.data.photos &&
                    apiResponse.data.photos.length &&
                    apiResponse.data.photos[0].src &&
                    apiResponse.data.photos[0].src.large2x})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <p
                  style={{
                    fontSize: largeTextInputValue,
                    color: largeTextInputColor,
                    fontStyle,
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
                    color: textInputColor,
                    fontStyle,
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

            <Col lg={4}>
              <Card
                style={{
                  textAlign: "center",
                  padding: 20,
                  borderRadius: 5
                }}
              >
                <img
                  className="quotesera-logo"
                  src={require("../assets/Rayana.png")}
                  alt="quotesera_logo"
                />
                <div>
                  <p>Main Text</p>
                  <InputRange
                    maxValue={50}
                    minValue={20}
                    value={largeTextInputValue}
                    onChange={value => setLargeTextInputValue(value)}
                  />
                  <p>Sub Text</p>
                  <InputRange
                    maxValue={40}
                    minValue={10}
                    value={textInputValue}
                    onChange={value => setTextInputValue(value)}
                  />

                  {chooseColorSmall && (
                    <SketchPicker
                      color={textInputColor}
                      onChangeComplete={color => setTextInputColor(color.hex)}
                    />
                  )}

                  {chooseColorLarge && (
                    <SketchPicker
                      color={largeTextInputColor}
                      onChangeComplete={color =>
                        setLargeTextInputColor(color.hex)
                      }
                    />
                  )}

                  <Button
                    className="spacing"
                    onClick={onButtonChooseColorSmallClick}
                  >
                    {chooseColorSmall ? "Set Color" : "Sub Color"}
                  </Button>
                  <Button
                    className="spacing"
                    onClick={onButtonChooseColorLargeClick}
                  >
                    {chooseColorLarge ? "Set Color" : "Main Color"}
                  </Button>

                  <div style={{ textAlign: "center" }}>
                    <Button
                      className="spacing"
                      variant={fontStyle === "italic" ? "success" : "primary"}
                      onClick={onClickFontStyle}
                    >
                      Italics
                    </Button>
                    <Button onClick={onButtonClick} className="spacing">
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default Quotes;

// https://www.pexels.com/photo/photo-of-pink-rose-in-bottle-by-gray-wall-2377470/
