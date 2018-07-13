import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import {
	Row,
	Col,
	Nav,
	// Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Switch>
					<Route exact path="/" render={() => <Login _login={this._login} />} />
					<Route exact path="/dashboard" render={({ match }) => <Dashboard user={this.state.user} match={match} />} />
					<Route exact path="/login" render={() => <Login _login={this._login} />} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</div>
		</Router>
		);
	}
}

export default App;
