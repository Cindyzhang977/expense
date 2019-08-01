import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import logo from "./imgs/logo.png";
import "./dashboard.css";
import HomePage from "./index.js";
import Dashboard from "./dashboard.js";
import Profile from "./profile.js";

class UserRouting extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu.bind(this);
  }

  toggleMenu() {
    return;
  }

  toHomePage() {
    console.log("home");
    return <HomePage />;
  }

  render() {
    return(
      <Router>
        <div>
          <div className="nav">
              <div className="navbar">
                  <div className="menu-item"><Link to="/" id="expense-logo">expen<img id="logo" src={logo} alt="expense logo"/>e</Link></div>
                  <div className="menu-icon" onClick={this.toggleMenu}>
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                  </div>
              </div>
              <ul id="menu">
                  <li><div className="nav-link"><Link to="/dashboard">Dashboard</Link></div></li>
                  <li><div className="nav-link">Expense History</div></li>
                  <li><div className="nav-link"><Link to="/manage-profile">Manage Profile</Link></div></li>
                  <li><div className="nav-link"><Link to="/">Log Out</Link></div></li>
              </ul>
          </div>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/expense-history" component={HomePage} />
          <Route path="/manage-profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default UserRouting;
