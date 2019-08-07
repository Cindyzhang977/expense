import React from 'react';
import "./user.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }

  setAmount(value, type) {
    if (type === "In") {
      value = 0;
    }
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
