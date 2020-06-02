import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';

export default class Login extends Component {
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

   

      try { 
        await axios.post("https://miniproject-team-a.herokuapp.com/api/v1/login", {
          email: this.state.email,
          password: this.state.password
        }) .then(res=>{
            const status = res.status
            if(status===200){
              alert(`login sukses`)
            } else{
              alert(`coba lagi`)
            }
            console.log(res.data)
        })
        } catch (err) {
            console.log(err)
            alert(`Account register failed`)
        }
      }
  

  render() {
    return (
      <div>
      <Container>
        <Row style={{height: "100vh", width:"100%"}}className="align-items-center" >
          <Col>
              {/* <CardTitle>Created Account</CardTitle>
                <i className="fab fa-facebook-f"/>
                <i className="fab fa-google-plus-g"/>
                <i className="fab fa-linkedin-in"/>
                <p>or use your email for registration</p> */}
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
                  type="text" //nanti ganti ya
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
                  <Button>SIGN IN</Button>
                </FormGroup>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
  }
