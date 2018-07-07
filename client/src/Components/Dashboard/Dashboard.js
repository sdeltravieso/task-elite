import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

const Dashboard = props => (
  <div>
    <Row>
      <Col xs={12} md={2}>
        <Sidebar />
      </Col>
      <Col xs={12} md={10}>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <MainContent />
        </Row>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
