import React from 'react';
import {Link} from 'react-router-dom'
import Register from '../components/Register';
import { Container, Card } from 'reactstrap';
import '../styles/css/todopages.css'

export default class SignUpPage extends React.Component {
  render(){
  return (
    <div>
      <Link to ="/"><div className ="logo">Todos</div></Link>
      <Container className="card-group container-fluid">
        <Card>
        <img className="register-image" src={require('../styles/images/Add User-bro.svg')}/>
        </Card>
        <Card>
          <h1 className ="greeting">Welcome To the Todo Club!</h1>
          <p className ="description">To keep connected with us please fill with your personal info</p>
        <Register/>
        </Card>
        
      </Container>
    </div>
  )
}}
