import React from 'react';
import {Link} from 'react-router-dom'
import Register from '../components/Register';
import { Container, Button, Card } from 'reactstrap';

export default class SignUpPage extends React.Component {
  render(){
  return (
    <>
      <Link to ="/"><div className ="logo">Todos</div></Link>
      <Container className="card-group container-fluid">
        <Card>
          <h1 className ="greeting">Welcome Back!</h1>
          <p className ="description">To keep connected with us please login with your personal info</p>
          <Link to ="/login"><Button>SIGN IN</Button></Link>
        </Card>
        <Register/>
      </Container>
    </>
  )
}}
