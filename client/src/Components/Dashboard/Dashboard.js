import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import MainContent from "./MainContent";
import { Row, Col } from "react-bootstrap";

const Dashboard = props => (
  <div>
    <Row>
      <NavBar />
    </Row>
    <Row>
      <Col xs={4} md={2} lg={2}>
        <Sidebar />
      </Col>
      <Col xs={8} md={10} lg={10}>
        <MainContent />
      </Col>
    </Row>
  </div>
);

export default Dashboard;
