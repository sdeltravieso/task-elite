import React, { Component } from "react";
import "./Departments.css";
import API from "../utils/API";
import Department from "./Department";
import AddDepartmentModal from "./DepartmentModal";
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
    API.getDepartments().then(res => this.setState({ departments: res.data }));
  };

  componentDidMount() {
    this.loadDepartments();
  };

  deleteDepartment = id => {
    API.deleteDepartment(id)
      .then(res => this.loadDepartments())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <AddDepartmentModal />
        </Row>

        <Row>
          {this.state.departments.map(department => (
            <Department
              id={department.id}
              key={department.id}
              departmentName={department.departmentName}
              description={department.description}
              deleteDepartment={this.deleteDepartment}
            />
          ))}
        </Row>
      </div>
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
