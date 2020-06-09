import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button, CardTitle} from 'reactstrap';
import axios from 'axios';
import '../styles/css/todopages.css'
import { withRouter, Link} from 'react-router-dom'
import swal from 'sweetalert2'

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1"

class Login extends Component {
  state = {
		id: "",
		email: "",
		password: ""
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const addUser ={
      password:this.state.password,
      email:this.state.email
      }
  
      try {
        const res =await axios.post(`${baseUrl}/login`, addUser)
        console.log(res.data)
        if(res.data.status === "success"){
          window.localStorage.setItem('token', res.data.data.access_token)
          swal.fire ("Login successfully!", "Let's start your todo", "success");
          this.props.history.push('/mainpage')
        } else if (res.data.status !== "success"){
          swal.fire ("Sorry:(", "Please put your correct email and password", "error");
        }
        
      } catch (err) {
        console.log(err)
        swal.fire ("Sorry:(", "Please put your correct email and password", "error");
      }}

  render() {
    return (
      <div>
      <Container>
        <Row style={{height: "100vh", width:"100%"}}className="align-items-center" >
          <Col>
               <CardTitle className="bold-title">ENTER</CardTitle>
                <p>Login and start making your todo</p>
                {/* <i className="icon fab fa-facebook-f"/>
                <i className="icon fab fa-google-plus-g"/>
                <i className="icon fab fa-linkedin-in"/> */}
              <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                  <Input className='mb-2'
                  style={{width:300}}
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  />
                  <Input className='mb-3'
                  style={{width:300}}
                  id="password"
                  type="password" //nanti ganti ya
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
                  <Button color="primary" >SIGN IN</Button>
                  <Link to="/signup">
                    <p
                      style={{ marginLeft: 85, paddingTop: 20 }}
                      className="have-account"
                    >
                      I dont have an account here
                    </p>
                  </Link>
                </FormGroup>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
  }
  export default withRouter (Login)