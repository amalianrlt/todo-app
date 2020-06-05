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
            {/* <Input
              className="form-control mx-2 mb-2"
              type="date"
              placeholder="Describe your Todo!"
              value={deadline}
              onChange={changeDeadline}
            /> */}
            
            <Button color="primary" className="add-todo-button" onSubmit={(e) => submit(e)} > add </Button> 
            
            {/* <Button color="primary" className="add-todo-button" >
              Add
            </Button> */}
          </FormGroup>
        </Form>
        {/* <form>
                    <input 
                    name ="description"
                    placeholder = "Describe it!" 
                    value= {this.state.description} 
                    onChange={e => this.changeName(e)}/>
                </form>           */}
        {/* <form>
                    <input 
                    name ="deadline"
                    placeholder = "Input your dedline" 
                    value= {this.state.deadline} 
                    onChange={e => this.changeName(e)}/>
                </form>           */}
      </div>
    );
  }
}
