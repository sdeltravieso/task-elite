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

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
			<div className="imgdiv">
				<img src="./img/img.jpg" alt=""/>
				<h1>Welcome To Task Elite, Please Sign Up!</h1>
			</div>
        <form onSubmit={this.handleSubmit}>
				<FormGroup controlId="fullname" bsSize="large">
            <ControlLabel className="text">Full Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
						</FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel className="text">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="text">Password</ControlLabel>
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
            type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;