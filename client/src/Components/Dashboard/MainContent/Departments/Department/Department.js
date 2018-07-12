import React from "react";
import "./Department.css";

const Department = props => (
	// <div onClick={() => props.setClicked(props.id)} className="user">
	<div className="user">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
              
    	</div>
        <div className="content">
            <ul>
                <li>Department: 
                    {" " + props.departmentName}
                </li> 
                <li>Description: 
                    {" " + props.description}
                </li> 
            </ul>
            <span onClick={() => props.deleteDepartment(props.id)} className="delete">
      ✗
      </span>
        </div>
  </div>
);

export default Department;