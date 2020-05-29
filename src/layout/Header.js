import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>choose one</h1>
      <Link to ="/signup"> Sign Up </Link>
      <Link to ="/login" > Login </Link>
      <Link to ="/mainpage"> Main page </Link> 
    </div>
  )
}

export default Header;
