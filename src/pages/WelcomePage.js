import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/WelcomePage.css'
import { Container, 
  Card,
  Navbar,
  NavbarBrand,
  Button,
  NavbarText
} from 'reactstrap'

class WelcomePage extends React.Component {
  render(){
  return (
    <div>
    <Navbar style={{ marginTop:-10,paddingLeft: 80, paddingRight: 150}} className="d-flex" light expand="md">
      <NavbarBrand className="d-flex"   href="/mainpage">Todo-Apps</NavbarBrand>
        <Link to = "/login"><NavbarText style={{ marginTop:30}} className="have-account">Already have an account?</NavbarText></Link>
        <Button className="register-button" href="/signup">Register</Button>
        </Navbar>
  
    <Container className="card-group container-fluid">
      <Card>
        <div className="welcome">
          <img className="set-image" src={require('../styles/images/To do list-pana.svg')}/>
        </div>
      </Card>
      <Card className="landing-page-text">
        <h1>Todo App</h1>
        <h3>Let's Create Your Todo In a Easy Way</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u
          t aliquip ex ea commodo consequat.</p>
        <Button className="get-started-button"href="/signup">Get Started</Button>
      </Card>
    </Container>
    </div>

  


  )
}}

export default WelcomePage;
