import React from "react";
import Users from "./Users";
import Departments from "./Departments";
import MainTasks from "./MainTasks";
import "./MainContent.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainContent = (props) => (

    <div className="maincontentContainer">
        {/* <Users /> */}
        {/* <Departments /> */}
        <MainTasks />
      </div>

	// <div className="maincontentContainer">
	// 	{/*This is where the react router will decide which component to load*/}
	// 	{/* <Users /> */}
	// 	{/* <Departments /> */}
	// 		<Route path="/tasks" component={MainTasks}/>
	// 		<Route path="/users" component={Users}/>

	// </div>

)

export default MainContent;