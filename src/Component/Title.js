import React from "react";
import { Alert } from "react-bootstrap";
export default function Title() {
  return (
    <Alert variant="primary" className="title">
      <Alert.Heading>Shopping List App</Alert.Heading>
    </Alert>
  );
}
