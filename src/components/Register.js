import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import swal from 'sweetalert2'

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1";
class Register extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    password: "",
    data: [],
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };

    try {
      const res = await axios.post(`${baseUrl}/register`, newUser);
      if (res.data.status === "success") {
        window.localStorage.setItem("token", res.data.data.access_token);
        swal.fire ("Register successfully!", "Welcome! Let's create your first Todo", "success");
        this.props.history.push("/mainpage");
      } else if (res.data.status === 'failed') {
        swal.fire ("Account register failed!", "You have an account here", "error ");
      }
    } catch (err) {
      console.log(err);
      swal.fire ("Account register failed!", "You have an account here", "error");
    }
  };

  render() {
    return (
      <div>
        <Container className="register-form">
          <Row style={{ height: "100vh" }} className="align-items-center">
            <Col>
              <i className="fab fa-facebook-f" />
              <i className="fab fa-google-plus-g" />
              <i className="fab fa-linkedin-in" />
              <p>or use your email for registration</p>
              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <FormGroup>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                  <Input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    // onChangeText={(event) => this.handleChange(id,event)}
                    // onChange={val => this.handleChange('email', val)}
                  />
                  <Input
                    id="password"
                    type="text" //nanti ganti ya
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                  <Button color="primary" className="mt-4">SIGN UP</Button>
                  <Link to="/login">
                    <p
                      style={{ marginLeft: 85, paddingTop: 20 }}
                      className="have-account"
                    >
                      Already have an account?
                    </p>
                  </Link>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Register);
