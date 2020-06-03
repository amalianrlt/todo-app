import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/todopages.css'
import Login from '../components/Login'
import { Card, Container } from 'reactstrap';

  export default class MainPage extends React.Component{
    render(){
  return (
    <div className="login-body">
      <div className ="logo"><Link to ="/">Todos</Link></div>
      <Container className="card-group container-fluid">
        <Card className="card" style={{width:300}}>
          <img className="login-image" src={require('../styles/images/Mobile login-rafiki.svg')}/>
        </Card>
        <Login/>
      </Container>
    </div>
  )
}}
