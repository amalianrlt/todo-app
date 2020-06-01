import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'reactstrap'
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit} = this.props
        return (
            <div>
                <Form>
                  <FormGroup className="d-flex justify-content-center align-items-*-baseline">
                    <h5>{title}</h5>
                    <FontAwesomeIcon size="lg" onClick={handleEdit} icon={faEdit} />
                    <FontAwesomeIcon size="lg" onClick={handleDelete} icon={faTrash} />
                  </FormGroup>
                  </Form>
            </div>
        )
    }
}
