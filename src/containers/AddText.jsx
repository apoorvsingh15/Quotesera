import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
const AddText = ({
  history: {
    location: { state = {} },
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
      height: state.height,
      width: state.width,
      mainQuote: largeText,
      subQuote: smallText
    });
  };

  return (
    <Container>
      <Card style={{ padding: 30, margin: 20 }}>
        <h1 style={{ textAlign: "center" }}>Enter your Quote</h1>
        <Form.Control
          onChange={onHandleLargeTextChange}
          value={largeText}
          size="lg"
          type="text"
          placeholder="Quote goes here"
          as="textarea"
          rows="3"
          maxLength={150}
          style={{ margin: 20, marginLeft: 0 }}
        />
        <Form.Control
          onChange={onHandleSmallTextChange}
          value={smallText}
          size="sm"
          type="text"
          placeholder="Credits go here"
          maxLength="15"
          style={{ margin: 20, marginLeft: 0 }}
        />
        <Button onClick={navigateToQuotes}>OK</Button>
      </Card>
    </Container>
  );
};

export default AddText;
