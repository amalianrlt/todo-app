import React from "react";
import "../styles/css/MainPage.css";
import TaskTodo from "../components/TaskTodo";
import { withRouter } from "react-router-dom";
import { Container, CardBody, Card, Button, Input } from "reactstrap";
import axios from "axios";

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1";
let token;

class MainPage extends React.Component {
  state = {
    data: [],
    image_url: {// klo di state image_url seluruh yg berhubungan sama ini harus image_url jg
      value: "", // ak liat salah satunya yg bkin error nama variabelnya beda2
      file: null
    },
    name:''
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
      // console.log("ini nyoba lagii:", res.data.data);
      this.setState({ name: res.data.data.name,  image: res.data.data.image_url});
      console.log("cek", res.data.data.image_url)
    } catch (error) {
      console.log(error);
    } 
  };

  handleFileOnChange = (e) => {
    e.preventDefault();
    console.log('masuk ga?')
    this.setState({
      image_url: {
        value: e.target.value,
        file: e.target.files[0]
      }
    })
    console.log(this.image_url)
  }
  // console.log(this.state.image)
  handleSubmit = (e) => {
    // console.log('cek')
    e.preventDefault();
    let token = localStorage.getItem('token')
    let formData = new FormData()
    formData.append("image", {uri : this.state.image_url})
    console.log(formData)
    console.log('cek state image,', this.state.image_url)

    axios({
      method: "POST",
      url: "https://miniproject-team-a.herokuapp.com/api/v1/user/avatar",
      headers: {
          Authorization: token
      },
      data: {
        image: this.state.image_url.value
      }
  })
  .then(res => {
      console.log("This is res update", res)
      this.props.history.replace("/mainpage")
  })
  .catch(err=>{
      console.log("ERROR", err)
  })


  }

  render() {
    return (
    
        <Container fluid className="mainpage-page">
          <CardBody className="card-container-todo" >
            <Card className="card-user-todo container-fluid mr-2">
              <img src={this.state.image_url} alt="profpic" className="user-img"/>
              <h1 style={{textAlign: "center", marginLeft:"2rem"}}>{this.state.name}</h1>
              <Input type="file" id="picture" onChange={this.handleFileOnChange}/>
              <Button onClick={this.handleSubmit}>Save</Button>
              <ul className="todo-list-task">
                <li className="user-list">My Task</li>
                <li className="user-list">Important</li>
                <li className="user-list">Finish</li>
              </ul>
              <Button color="danger" className="signout-button" onClick={this.handleLogout}>Sign Out</Button>
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
