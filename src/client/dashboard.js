import React from 'react';
import "./views/user.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountOut: 0,
      amountIn: 0,
    }
  }

  setAmount(value, type) {
    if (type === "In") {
      this.setState({amountIn: this.state.amountIn + value});
    } else if (type === "Out") {
      this.setState({amountOut: this.state.amountOut + value});
    }
  }

  render() {
    return (
      <div>
        <SpendingLimit amount={this.state.amountOut} />
        <ExpenseTracker setAmount={this.setAmount.bind(this)} />
      </div>
    );
  }
}

export default Dashboard;
