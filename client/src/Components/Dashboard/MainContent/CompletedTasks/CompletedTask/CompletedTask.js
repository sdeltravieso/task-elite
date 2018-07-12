import React from "react";
import "./CompletedTask.css";

const CompletedTask = props => (
  // <div onClick={() => props.setClicked(props.id)} className="user">
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
      {/* <span onClick={() => props.deleteTask(props.id)} className="delete">
      ✗
      </span> */}
    </div>
  </div>
);

export default CompletedTask;
