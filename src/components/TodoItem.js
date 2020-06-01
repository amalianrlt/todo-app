import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'reactstrap'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit} = this.props
        return (
            <div>
                <Form>
                  <FormGroup>
                    <h3>{title}</h3>
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                  </FormGroup>
                  </Form>
            </div>
        )
    }
}
