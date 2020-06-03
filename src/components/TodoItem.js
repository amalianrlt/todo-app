import React, { Component } from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import { faTrash, faEdit, faStar, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
    render() {
        const { name, description, handleDelete, handleEdit, handleImportant, handleCheckList, finished} = this.props
        return (
            <div>
                <Form>
                  <FormGroup className="d-flex justify-content-center align-items-*-baseline">
                    <FontAwesomeIcon size="lg" 
                    icon={faCheckSquare} />
                    <h5
                     style={{textDecoration: `${finished ? "line-through" : "none"} `}}
                     onClick={handleCheckList} 
                    >{name}</h5>
                    <p>{description}</p>
                    <FontAwesomeIcon size="lg" onClick={handleEdit} icon={faEdit} />
                    <FontAwesomeIcon size="lg" onClick={handleDelete} icon={faTrash} />
                    <FontAwesomeIcon size="lg" icon={faStar} onClick={handleImportant} />
                    
                  </FormGroup>
                  </Form>
            </div>
        )
    }
}
