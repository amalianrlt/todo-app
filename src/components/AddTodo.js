import React, { Component } from "react";
import { Form, FormGroup, CardTitle, Button, Input } from "reactstrap";
import '../styles/css/MainPage.css'

export default class AddTodo extends Component {
  render() {
    const {
      name,
      changeName,
      changeDescription,
      submit,
      description,
    } = this.props;
    return (
      <div>
        <CardTitle style={{ fontSize: 30, marginLeft:9, fontWeight:"bold" }}>Welcome!</CardTitle>
        <CardTitle style={{ marginBottom:20, marginLeft:9 }} >Looks like today is a perfect day to make your todo!</CardTitle>
        <Form 
        onSubmit={(e) => submit(e)}>
          <FormGroup className="form-add"
            onSubmit={submit}
          >
            <Input
              className="form-control mx-2 mb-2"
              type="text"
              placeholder="Create your Todo"
              value={name}
              onChange={changeName}
            />
            <Input
              className="form-control mx-2 mb-2"
              type="textarea"
              placeholder="Describe your Todo!"
              value={description}
              onChange={changeDescription}
            />
            <Button color="primary" className="add-todo-button" onSubmit={(e) => submit(e)} > add </Button> 
          </FormGroup>
        </Form>
      </div>
    );
  }
}
