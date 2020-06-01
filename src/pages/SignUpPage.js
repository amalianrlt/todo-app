import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/Main.css'
import Register from '../components/Register';

export default class SignUpPage extends React.Component {
  render(){
  return (
    <div className = "login-container">
      <div className ="intro">
        <Link to ="/"><div className ="logo">Todos</div></Link>
        <h1 className ="greeting">Welcome Back!</h1>
        <p className ="description">To keep connected with us please login with your personal info</p>
        <Link to ="/login"><button className = "blue-btn">SIGN IN</button></Link>
      </div>
        <Register/>
    </div>
  )
}}
