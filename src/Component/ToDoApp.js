import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";
import List from "./List";

const ToDoApp = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [inputList, ...oldItems];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((newArr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Container>
        <Row className="container-style">
          <Col md={3}></Col>
          <Col md={6}>
            <Card className="text-center">
              <Title />
              <Card.Body>
                <div className="input-icon">
                  <input
                    type="text"
                    placeholder="Enter Item"
                    className="form-control"
                    value={inputList}
                    onChange={itemEvent}
                  />
                  <i
                    className="fa fa-plus-circle"
                    aria-hidden="true"
                    onClick={listOfItem}
                  ></i>
                </div>
              </Card.Body>
              <Card.Footer>
                {items.map((itemVal, index) => {
                  return (
                    <List
                      item={itemVal}
                      key={index}
                      id={index}
                      onSelect={deleteItem}
                    />
                  );
                })}

                {/* <List item={inputList} /> */}
              </Card.Footer>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default ToDoApp;
