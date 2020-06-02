import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/Main.css'
import Login from '../components/Login'
import { Card, Button, Container } from 'reactstrap';

export default class MainPage extends React.Component{
  render(){
  return (
    <div className="login-body">
      <div className ="logo"><Link to ="/">Todos</Link></div>
      <Container className="card-group container-fluid">
        <Card className="card" style={{width:300}}>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
          <Link to ="signup"><Button>Sign Up</Button></Link>
        </Card>
        <Login/>
      </Container>
    </div>
  )
}}
