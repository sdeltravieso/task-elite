import React from "react";
import "./Signup.css";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super();

    this.state = {
			fullName: "",
      username: "",
			password: "",
			redirectTo: null
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

	handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

	handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/auth/signup', {
			fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      const {error, username} = response.data;

      if (error) {
        alert('A username with this id exists already. Please enter a unique username', response.data.erorr)
      }
      else {
        alert('Success!, a username has been created for you', username);
        this.setState({
          redirectTo:'/login'
        });
      };
    });
  };

  render() {
		const {fullName, username, password, confirmPassword, redirectTo} = this.state;

    if (redirectTo) {
      return <Redirect to={{pathname:redirectTo}} />
    }
    return (
      <div className="Login">
			<div className="imgdiv">
				<img src="./img/img.jpg" alt=""/>
				<h1>Welcome To Task Elite, Please Sign Up!</h1>
			</div>
        <form onSubmit={this.handleSubmit}>
				<FormGroup htmlFor="fullName" controlId="fullName" bsSize="large">
            <ControlLabel htmlFor="fullName" className="text">Full Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={fullName}
              onChange={this.handleChange}
            />
						</FormGroup>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel htmlFor="username" className="text">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup htmlFor="password" controlId="password" bsSize="large">
            <ControlLabel className="text">Password</ControlLabel>
            <FormControl
              value={password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
					<Button
						block
						bsSize="large"
            disabled={!this.validateForm()}
            type="submit" onClick={this.handleSubmit}>
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;