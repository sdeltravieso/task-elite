import React, {Component} from "react";
import API from "../utils/API";
import "./Users.css";
// import users from "./users.json";
import User from "./User";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";


class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    console.log("hit");
    API.getUsers()
      .then(res =>
        this.setState({users: res.data}))
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    console.log(this);
    return (
      <Row>
          {this.state.users.map(user => (
            <User 
              id={user.id}
              key={user.id}
              name={user.fullname}
              username={user.username}
              email={user.email}
              
              department={user.department}
            />
    
          ))}
      </Row>
         
    
    
  )
}

  }

// const Users = props => (
// );

export default Users;
