import React, { Component } from 'react'
import { Form, FormGroup } from 'reactstrap'
import { faTrash, faEdit, faStar, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit, handleImportant, handleCheckList, complete} = this.props
        return (
            <div>
                <Form>
                  <FormGroup className="d-flex justify-content-center align-items-*-baseline">
                    <FontAwesomeIcon size="lg" 
                    icon={faCheckSquare} />
                    <h5
                     style={{textDecoration: complete? "line-through" : ""}}
                     onClick={handleCheckList} 
                    >{title}</h5>
                    <FontAwesomeIcon size="lg" onClick={handleEdit} icon={faEdit} />
                    <FontAwesomeIcon size="lg" onClick={handleDelete} icon={faTrash} />
                    <FontAwesomeIcon size="lg" icon={faStar} onClick={handleImportant} />
                  </FormGroup>
                  </Form>
            </div>
        )
    }
}
