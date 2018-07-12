import React, { Component } from "react";
import "./MainTasks.css";
import API from "../utils/API";
// import tasks from "./tasksData.json";
import Task from "./Task";
import AddTaskModal from "./TaskModal";
import { List, ListItem } from "./List";
import DeleteBtn from "./DeleteBtn";
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
    tasks: []
  };

  loadTasks = () => {
    console.log("hit from loadTasks");
    // API.getTasks().then(res => this.setState({ tasks: res.data }));
    API.getInCompletedTasks().then(res => this.setState({ tasks: res.data }));
  };

  componentDidMount() {
    this.loadTasks();
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

  // render() {
  //   // if there are no tasks, display that there are no tasks
  //   if ((this.state.tasks.length = 0)) {
  //     return (
  //       <div>
  //         <Row>
  //           <AddTaskButton />
  //         </Row>
  //         <p>There are no unfinished tasks.</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Row>
  //           <AddTaskButton />
  //         </Row>
  //         <Row>
  //           {/* <p>There are tasks</p> */}
  //           {this.state.tasks.map(task => (
  //             <Task
  //               id={task.id}
  //               key={task.id}
  //               task={task.taskName}
  //               description={task.description}
  //             />
  //           ))}
  //         </Row>
  //       </div>
  //     );
  //   }
  // }

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

export default MainTasks;
