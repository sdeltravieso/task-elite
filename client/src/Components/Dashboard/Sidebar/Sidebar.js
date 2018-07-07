import React from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = (props) => (
    <nav className="navbar navbar-expand-lg sidebarStyle">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav mr-auto flex-sm-column">
        <div className="logoDiv">
            <span>
                <img className="logoImage" src="./images/taskEliteLogo.png"></img>
            </span>

        </div> 

        <li className="nav-item active">
            <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Department</a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Completed Tasks</a>
        </li>
        
        </ul>
        <form className="form-inline my-2 my-lg-0">
        </form>
    </div>
    </nav>

)

export default Sidebar;