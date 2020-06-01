import React, { Component } from 'react';
import { Container, Row, Col, CardTitle, Form, FormGroup, Input, Button} from 'reactstrap';
import axios from 'axios';

export default class Register extends Component {
	state = {
		id: "",
		name: "",
		email: "",
		password: "",
		data:[]
	}
	
	handleChange = (e) =>{
		e.preventDefault();

		this.setState({
			[e.target.id]: e.target.value
		})
	}

	getRegister = async(name, email, password)=>{
		try{
			const res = await axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register", {
				name: name,
				email: email,
				password: password
			})
			this.setState({data:res.data})
			console.log(this.state.data)
			console.log(this.state.data.status)
			alert(`Account has been register`)
			if(this.state.data.status === "success"){
					console.log(res.data)
					alert(`welcome`)
			}
			} catch (err) {
					console.log(err)
					alert(`Account register failed`)
			}

		}

	
	// getRegister(){
	// 	axios.post("https://miniproject-team-a.herokuapp.com/api/v1/register")
	// 		.then(res => {
	// 			console.log(res.data)
	// 		})
	// 		.catch(error => {
	// 			console.log(error.response)
	// 		})
	// }
		
	

	handleSubmit = (e) => {
		e.preventDefault()
		this.getRegister()
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
					<Row style={{height: "100vh", width:"100%"}}className="align-items-center" >
						<Col>
								<CardTitle>Created Account</CardTitle>
									<i className="fab fa-facebook-f"/>
									<i className="fab fa-google-plus-g"/>
									<i className="fab fa-linkedin-in"/>
									<p>or use your email for registration</p>
								<Form onClick={(e)=> this.handleSubmit(e)}>
									<FormGroup>
										<Input id="name"
										type="text"
										placeholder="Name"
										value={this.state.name}
										onChange={this.handleChange}
										/>
										<Input id="email"
										type="text"
										placeholder="Email"
										value={this.state.email}
										onChange={this.handleChange}
										/>
										<Input id="password"
										type="text" //nanti ganti ya
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleChange}
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
