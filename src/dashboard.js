import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import "./dashboard.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js";
import HomePage from "./index.js";
import logo from "./imgs/logo.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toHomePage.bind(this);
  }

  toHomePage() {
    console.log("home");
    return <Redirect to='/' />;
  }

  render() {
    return (
      <div>
        <Navbar />
        <SpendingLimit />
        <ExpenseTracker />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu.bind(this);
  }

  toggleMenu() {
    return;
  }

  render() {
    return (
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
              <li><div className="nav-link">Dashboard</div></li>
              <li><div className="nav-link">Expense History</div></li>
              <li><div className="nav-link">Manage Profile</div></li>
              <li><div className="nav-link"><Link to="/">Log Out</Link></div></li>
          </ul>
      </div>
    );
  }
}


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
)



export default Dashboard;
