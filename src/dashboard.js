import React from 'react';
// import ReactDOM from 'react-dom';
// import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import "./user.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js";
// import Profile from "./profile.js";
// import HomePage from "./index.js";
// import logo from "./imgs/logo.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }

  setAmount(value) {
    this.setState({amount: this.state.amount + value});
  }

  render() {
    return (
      <div>
        <SpendingLimit amount={this.state.amount} />
        <ExpenseTracker setAmount={this.setAmount.bind(this)} />
      </div>
    );
  }
}

export default Dashboard;
