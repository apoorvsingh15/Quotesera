import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const AddText = ({
  history: {
    location: {
      state: { height, width }
    },
    push
  }
}) => {
  const [largeText, setLargeText] = useState("");
  const [smallText, setSmallText] = useState("");

  const onHandleLargeTextChange = ({ target: { value } }) => {
    setLargeText(value);
  };

  const onHandleSmallTextChange = ({ target: { value } }) => {
    setSmallText(value);
  };

  const navigateToQuotes = () => {
    push("quotes", {
      height: height,
      width: width,
      mainQuote: largeText,
      subQuote: smallText
    });
  };

  return (
    <div>
      <Form.Control
        onChange={onHandleLargeTextChange}
        value={largeText}
        size="lg"
        type="text"
        placeholder="Large text"
      />
      <Form.Control
        onChange={onHandleSmallTextChange}
        value={smallText}
        size="sm"
        type="text"
        placeholder="Small text"
      />
      <Button onClick={navigateToQuotes}>OK</Button>
    </div>
  );
};

export default AddText;
