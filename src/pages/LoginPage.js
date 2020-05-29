import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/css/Main.css'

const LoginPage = () => {
  return (
    <div className = "login-container">
      <div className ="intro">
        <div className ="logo"><Link to ="/">Todos</Link></div>
        <h1 className ="greeting">Hello, Friend!</h1>
        <p className ="description">Enter your personal details and start your journey with us</p>
        <Link to ="signup"><button className = "blue-btn">Sign Up</button></Link>
      </div>
      <div className ="form">
        <h1 className ="sign-intro">Sign in to Task Manager</h1>
        <div className ="icon">
          <ul>
            <li className="socmed-icon"><i className="fab fa-facebook-f"></i></li>
            <li className="socmed-icon"><i className="fab fa-google-plus-g"></i></li>
            <li className="socmed-icon"><i className="fab fa-linkedin-in"></i></li>
          </ul>
        </div>
        <div className ="form-area">
          <p className="alternative">or use your email for registration</p>
          <input type="email" name="email" placeholder="Email"/><br></br>
          <input type="pass" name="pass" placeholder="Password"/><br></br>
          <Link to ="/mainpage"><button className="btn-register">SIGN IN</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
