import React, { Component } from 'react';
import { Container, Row, Col, CardTitle, Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom"

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1"
export default class Register extends Component {
	state = {
		id: "",
		name: "",
		email: "",
		password: "",
		data:[]
	}
	
	// handleChange = (e) =>{
	// 	e.preventDefault();

	// 	this.setState({
  //     [e.target.id]: e.target.value
	// 	})
  // }
  
    // handeChange = (key, val) =>{
    // this.setState({ [key]: val })
    // }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

	// getRegister = async(name, email, password)=>{
	// 	try{
	// 		const res = await axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register", {
	// 			name: name,
	// 			email: email,
	// 			password: password
	// 		})
	// 		this.setState({data:res.data})
	// 		console.log(this.state.data)
	// 		console.log(this.state.data.status)
	// 		alert(`Account has been register`)
	// 		if(this.state.data.status === "success"){
	// 				console.log(res.data)
	// 				alert(`welcome`)
	// 		}
	// 		} catch (err) {
	// 				console.log(err)
	// 				alert(`Account register failed`)
	// 		}

	// 	}

	
	// getRegister(){
	// 	axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register")
	// 		.then(res => {
	// 			console.log(res.data)
	// 		})
	// 		.catch(error => {
	// 			console.log(error.response)
	// 		})
	// }
		
	

	handleSubmit = async (e) => {
	e.preventDefault()
	
	const newUser ={
		name: this.state.name,
		password:this.state.password,
		email:this.state.email
	  }

	  try {
		  const res =await axios.post(`${baseUrl}/register`, newUser)
		  console.log(res.data)
		  if(res.data.status === "Success"){
			  localStorage.setItem('token', res.data.data.token)
			  this.props.history.push('/mainpage')
		  }
	  } catch (err) {
		  console.log(err)
	  }

    //   try { 
    //     await axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register", {
    //       name: this.state.name,
    //       email: this.state.email,
    //       password: this.state.password
    //     }) .then(res=>{
	// 		console.log(res, "post")
    //         const status = res.status
    //         if(status===201){
    //           alert(`register sukses`)
    //         } else if (status ===422){
    //           alert(`akun uda terdaftar`)
    //         }
    //     })
    //     } catch (err) {
    //         console.log(err)
    //         alert(`Account register failed`)
    //     }
  
      
		// this.getRegister()
	// 	axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register", {
	// 		name: this.state.name,
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	})

	// 	.then(res=>{
	// 		console.log(res.data)
	// 	})
	
	}

	render() {
		return (
			<div>
				<Container>
					<Row style={{height: "100vh"}}className="align-items-center" >
						<Col>
								<CardTitle>Created Account</CardTitle>
									<i className="fab fa-facebook-f"/>
									<i className="fab fa-google-plus-g"/>
									<i className="fab fa-linkedin-in"/>
									<p>or use your email for registration</p>
								<Form onSubmit={(e)=> this.handleSubmit(e)} >
									<FormGroup>
										<Input id="name"
										type="text"
										placeholder="Name"
										value={this.state.name}
                    onChange={this.onChangeName}
                    // onChangeText={(key, val) => this.handleChange(id,event)}
                    // onChange={val => this.handleChange("name", val)}
										/>
										<Input id="email"
										type="text"
										placeholder="Email"
										value={this.state.email}
                    onChange={this.onChangeEmail}
                    // onChangeText={(event) => this.handleChange(id,event)}
                    // onChange={val => this.handleChange('email', val)}
										/>
										<Input id="password"
										type="text" //nanti ganti ya
										placeholder="Password"
										value={this.state.password}
                    onChange={this.onChangePassword}
                    // onChangeText={(event) => this.handleChange(id, event)}
                    // onChange={val => this.handleChange('password', val)}
										/>
										<Button>SIGN UP</Button>
									</FormGroup>
								</Form>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
