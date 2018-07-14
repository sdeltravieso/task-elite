import React from "react";
import "./Task.css";
import ReactDOM from "react-dom";
import Select from "react-select";

const Task = props => (
  // <div onClick={() => props.setClicked(props.id)} className="user">

  //   super(props);
  // this.state = {value: 'coconut'}

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  <div className="user">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          Task:
          {" " + props.task}
        </li>
        <li>
          Description:
          {" " + props.description}
        </li>
      </ul>

      <span onClick={() => props.completeTask(props.id)} className="complete">
        Complete Task
      </span>
      <span onClick={() => props.deleteTask(props.id)} className="delete">
        ✗
      </span>
        {/* dropdown of all the users */}
      <label>
        <select onChange={this.handleChange}>
          {props.users.map(user => 
            <option>{user.fullname}</option>)}
        </select>
      </label>
    </div>
  </div>
);

export default Task;
