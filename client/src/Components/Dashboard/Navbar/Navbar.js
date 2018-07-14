import React from "react";
import "./Navbar.css";
import { Row, Col } from "react-bootstrap";

const NavBar = props => (
  <div>
    <Row id="nav-top">
      <Col xs={2} md={1} lg={1}>
        <a href="#home">
          <img src="../images/taskEliteLogo.png" id="logoImage" />
        </a>
      </Col>
      <Col xs={8} md={10} lg={10} id="task-name">
        Task Elite
      </Col>
      <Col xs={2} md={1} lg={1} className="nav-cont">
        Login
      </Col>
    </Row>
  </div>
);

export default NavBar;
