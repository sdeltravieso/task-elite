import React from "react";
import "./Login.css";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
		console.log('handleSubmit')
		var username = this.state.username;
		var password = this.state.password;

		axios.post('/auth/login', { username, password }).then(response => {
			console.log(response)
			if (response.status === 200) {
				
				this.setState({
					loggedIn: true,
					user: response.data.user,
					redirectTo: '/dashboard'
				})
				return true;
			}
		}).catch(error => {
			alert("Invalid username or password. Please try again.");
			this.setState({
				redirectTo: '/login'
			})
		});


  }

  render() {
		const {username, password, redirectTo} = this.state;

    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo}} />
    }
    return (
			<div className="Login">
			<div className="imgdiv">
				<img src="./img/img.jpg" alt=""/>
				<h1>Welcome To Task Elite</h1>
			</div>
        <form>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel htmlFor="username" className="text">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel htmlFor="password" className="text">Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
						type="submit"
						onClick={this.handleSubmit}
          >
            Login
          </Button>
					<Link to="/signup">
					<Button
						id="signupbtn"
            block
            bsSize="small"
            type="button">
            Sign Up
          </Button>
					</Link>
        </form>
      </div>
    );
  }
}

export default Login;
