import React, { Component } from "react";
import "./MainTasks.css";
import API from "../utils/API";
// import tasks from "./tasksData.json";
import Task from "./Task";
import AddTaskModal from "./TaskModal";
import { List, ListItem } from "./List";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class MainTasks extends Component {
  state = {
    tasks: [],
    users: []
  };

  loadTasks = () => {
    console.log("hit from loadTasks");
    API.getInCompletedTasks().then(res => this.setState({ tasks: res.data }));
  };

  componentDidMount() {
    this.loadTasks();
    this.loadUsers();
  }

  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  completeTask = id => {
    API.completeTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  // populate dropdown
  loadUsers = () => {
    console.log("hit");
    API.getUsers().then(res => this.setState({ users: res.data }));
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Row>
          <AddTaskModal />
          <h1>Incomplete Tasks</h1>
        </Row>

        <Row>
          <List>
            {this.state.tasks.map(task => (
              <ListItem>
                <Task
                  id={task.id}
                  key={task.id}
                  task={task.taskName}
                  description={task.description}
                  completeTask={this.completeTask}
                  deleteTask={this.deleteTask}
                  users={this.state.users}
                  />
              </ListItem>
            ))}
          </List>
        </Row>
      </div>
    );
  }
}

export default MainTasks;
