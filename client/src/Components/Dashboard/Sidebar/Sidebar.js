import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Row, Column } from "react-bootstrap";

const Sidebar = props => (
  <Row id="side-contain">
    <ul>
      <li className="nav-item active">
        <Link className="nav-link" to="/users">
          Users
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/department">
          Department
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tasks">
          Tasks
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/completedTasks">
          Completed Tasks
        </a>
      </li>
    </ul>
  </Row>
);

export default Sidebar;
