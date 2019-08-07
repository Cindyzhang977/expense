import React from 'react';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import logo from "./imgs/logo.png";
import "./user.css";
import Dashboard from "./dashboard.js";
import Profile from "./profile.js";
import ExpenseHistory from "./expense-history.js";

class UserRouting extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu.bind(this);
    this.state = {
      toHome: false,
    }
  }

  toggleMenu() {
    var menu = document.getElementById("menu");
    var currDisplay = menu.style.display;
    if (currDisplay === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
  }

  toHomePage() {
    this.setState({toHome: true});
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to='/' />;
    }
    return(
      <Router>
        <div>
          <div className="nav">
              <div className="navbar">
                  <div className="menu-item nav-link" id="expense-logo" onClick={this.toHomePage.bind(this)}>expen<img id="logo" src={logo} alt="expense logo"/>e</div>
                  <div className="menu-icon" onClick={this.toggleMenu}>
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                  </div>
              </div>
              <ul id="menu">
                  <li><div className="nav-link"><Link to="/dashboard">Dashboard</Link></div></li>
                  <li><div className="nav-link"><Link to="/expense-history">Expense History</Link></div></li>
                  <li><div className="nav-link"><Link to="/manage-profile">Manage Profile</Link></div></li>
                  <li><div className="nav-link" onClick={this.toHomePage.bind(this)}>Log Out</div></li>
              </ul>
          </div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/expense-history" component={ExpenseHistory} />
          <Route path="/manage-profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default UserRouting;
