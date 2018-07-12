import React from "react";
import "./User.css";

const User = props => (
	// <div onClick={() => props.setClicked(props.id)} className="user">
	<div className="user">
		{/* <div className="img-container">
      		<img alt={props.name} src={props.image} />
              
    	</div> */}
        <div className="content">
            <ul>
                <li>Name: 
                    {" " + props.name}
                </li> 
                <li>Username: 
                    {" " + props.username}
                </li> 
                <li>Email: 
                    {" " + props.email}
                </li> 
                {/* <li>Department: 
                    {" " + props.department}
                </li>  */}
            </ul>
        </div>
  </div>
);

export default User;