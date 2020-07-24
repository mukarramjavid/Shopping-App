import React from "react";
import { ListGroup } from "react-bootstrap";

const List = (props) => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item className="toDoList">
          <span className="text-danger float-left">
            <i
              className="fas fa-trash"
              onClick={() => {
                props.onSelect(props.id);
              }}
            ></i>
          </span>
          {props.item}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
export default List;
