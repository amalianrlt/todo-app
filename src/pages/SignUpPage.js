import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/Main.css'

const SignUpPage = () => {
  return (
    <div className = "login-container">
      <div className ="intro">
        <Link to ="/"><div className ="logo">Todos</div></Link>
        <h1 className ="greeting">Welcome Back!</h1>
        <p className ="description">To keep connected with us please login with your personal info</p>
        <Link to ="/login"><button className = "blue-btn">SIGN IN</button></Link>
      </div>
      <div className ="form">
        <h1 className ="sign-intro">Created Account</h1>
        <div className ="icon">
          <ul>
            <li className="socmed-icon"><i className="fab fa-facebook-f"></i></li>
            <li className="socmed-icon"><i className="fab fa-google-plus-g"></i></li>
            <li className="socmed-icon"><i className="fab fa-linkedin-in"></i></li>
          </ul>
        </div>
        <div className ="form-area">
          <p className="alternative">or use your email for registration</p>
          <input type="name" name="name" placeholder="Name"/><br></br>
          <input type="email" name="email" placeholder="Email"/><br></br>
          <input type="pass" name="pass" placeholder="Password"/><br></br>
          <Link to ="/mainpage"><button className="btn-register">SIGN UP</button></Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
