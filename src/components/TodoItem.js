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
      finished,
      important
    } = this.props;
    return (
        <Container className="todo-list-container" >
            <FontAwesomeIcon
              size="3x"
              className="icon-checklist"
              icon={faCheckCircle}
              style={{ alignItems: "left" }}
            />
          <div className="todo-list-card">
            <div className="todo-list-name-desc">
              <h5
                style={{
                  textDecoration: `${finished ? "line-through" : "none"} `,
                }}
                onClick={handleCheckList}
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
                    marginRight:20, color:`${important? "yellow" : "none"}`,
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
