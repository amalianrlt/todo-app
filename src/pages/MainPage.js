import React from "react";
import "../styles/css/MainPage.css";
import TaskTodo from "../components/TaskTodo";
import { withRouter } from "react-router-dom";
import { Container, CardBody, Card, Button } from "reactstrap";
import axios from "axios";

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1";
let token;

class MainPage extends React.Component {
  state = {
    data: []
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/");
    console.log("cek");
  };

  userTodo = async () => {
    token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${baseUrl}/user`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("ini nyoba lagii:", res.data.data);
      this.setState({ name: res.data.data.name,  image_url: res.data.data.image_url});
    } catch (error) {
      console.log(error);
    } 
  };

  render() {
    return (
    
        <Container fluid className="mainpage-page">
          <CardBody className="card-container-todo" >
            <Card className="card-user-todo container-fluid mr-2">
              <img src={this.state.image_url} alt="profpic" className="user-img"/>
              <h1 style={{textAlign: "center"}}>{this.state.name}</h1>
              <ul className="todo-list-task">
                <li>My Task</li>
                <li>Important</li>
                <li>Finish</li>
              </ul>

          <Button className="signout-button" onClick={this.handleLogout}>Sign Out</Button>
            </Card>
            <Card className="card-todo-todo">
              <TaskTodo userTodo={this.userTodo}/>
            </Card>
          </CardBody>
        </Container>
    
    );
  }
}

export default withRouter(MainPage);
