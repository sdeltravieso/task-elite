import React, { Component } from "react";
import "./CompletedTasks.css";
import API from "../utils/API";
// import tasks from "./tasksData.json";
import CompletedTask from "./CompletedTask";
// import AddTaskModal from "./TaskModal";
import { List, ListItem } from "../MainTasks/List";
// import DeleteBtn from "./DeleteBtn";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class CompletedTasks extends Component {
  state = {
    tasks: []
  };

  loadTasks = () => {
    console.log("hit from loadTasks");
    API.getCompletedTasks().then(res => this.setState({ tasks: res.data }));
  };

  componentDidMount() {
    this.loadTasks();
  }

//   deleteTask = id => {
//     API.deleteTask(id)
//       .then(res => this.loadTasks())
//       .catch(err => console.log(err));
//   };


  render() {
    return (
      <div>
        <Row>
          {/* <AddTaskModal /> */}
          <h1>Completed Tasks</h1>
        </Row>

        <Row>
          <List>
          {this.state.tasks.map(task => (
            <ListItem>
              <CompletedTask
                id={task.id}
                key={task.id}
                task={task.taskName}
                description={task.description}
                deleteTask={this.deleteTask}
                
                />
                {/* <DeleteBtn onClick={() => this.deleteTask(task._id)} /> */}
              
            </ListItem>
          ))}
            </List>
        </Row>
      </div>
    );
  }
}

export default CompletedTasks;
