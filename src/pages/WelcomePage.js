import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/WelcomePage.css'

class WelcomePage extends React.Component {
  render(){
  return (
    <div className="welcome">
      <h1>Hello There</h1>
      <Link to ="/signup"> Sign Up </Link> ||
      <Link to ="/login" > Login </Link> ||
      <Link to ="/mainpage"> Main page </Link> || 
    </div>
  )
}}

export default WelcomePage;
