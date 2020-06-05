import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  faTrash,
  faEdit,
  faStar,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
  render() {
    const {
      name,
      description,
      handleDelete,
      handleEdit,
      handleImportant,
      handleCheckList,
      completed,
      important
    } = this.props;
    return (
        <Container className="todo-list-container" style={{
           backgroundColor:`${completed? "#f4f4f4" : ""}`,
      }} >
            <FontAwesomeIcon
              size="3x"
              className="icon-checklist"
              icon={faCheckCircle}
              onClick={handleCheckList}
              style={{
                alignItems: "left", color:`${completed? "green" : ""}`,
            }}
            />
          <div className="todo-list-card">
            <div className="todo-list-name-desc">
              <h5
                // style={{
                //   textDecoration: `${finished ? "line-through" : "none"} `,
                // }}
                className="title-todo"
              >
                {name}
              </h5>
              <p>{description}</p>
              <div className="icon-todo">
                <FontAwesomeIcon
                  style={{marginRight:20}}
                  onClick={handleEdit}
                  icon={faEdit}
                />
                <FontAwesomeIcon
                  style={{marginRight:20}}
                  onClick={handleDelete}
                  icon={faTrash}
                />
                <FontAwesomeIcon
                  style={{
                    marginRight:20, color:`${important? "#ffbf00" : "black"}`,
                }}
                  icon={faStar}
                  onClick={handleImportant}

                />
              </div>
            </div>
          </div>
        </Container>
    );
  }
}
