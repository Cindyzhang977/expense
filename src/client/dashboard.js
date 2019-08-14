import React from 'react';
import "./views/user.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js"

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
        <SpendingLimit amount={this.state.amountOut} header={<SpendingHeader />} type='Limit' />
        <SpendingLimit amount={this.state.amountIn} header={<SavingHeader />} type='Goal' />
        <ExpenseTracker setAmount={this.setAmount.bind(this)} />
      </div>
    );
  }
}

function SpendingHeader() {
  return (
    <div className="spending-header content">
      <h1>Spending Limit</h1>
      <p>Set a monthly spending limit to control impulsive spending!</p>
    </div>
  );
}

function SavingHeader() {
  return (
    <div className="spending-header content">
      <h1>Saving Goal</h1>
      <p>Set a monthly saving goal to help you reach your goals!</p>
    </div>
  );
}

export default Dashboard;
