import React, { Component } from "react";
import "./Departments.css";
import API from "../utils/API";
import Department from "./Department";
import {
  Button,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form,
  ControlLabel
} from "react-bootstrap";

class Departments extends Component {
  state = {
    departments: []
  };

  loadDepartments = () => {
    console.log("hit from loadDepartments");
    API.getDepartments().
      then(res => 
        this.setState({ departments: res.data }));
  };

  componentDidMount() {
    this.loadDepartments();
  }

  render() {
    return (
      <Row>
          {this.state.departments.map(department => (
            <Department
              id={department.id}
              key={department.id}
              department={department.departmentName}
              description={department.description}
            />
            // <div>Something else for right now</div>
    
          ))}
      </Row>
    
    
  );
}
}

// const Departments = props => (
//   <Row>
//     <div className="department-container">
//       <div>
//         <h1 className="departmentTitle">Departments</h1>
//       </div>
//       <hr />
//       <div>
//         <h2> {props.department}</h2>
//       </div>
//     </div>
//   </Row>
// );

export default Departments;
