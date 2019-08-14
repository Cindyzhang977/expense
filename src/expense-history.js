import React from 'react';
import "./expense-history.css";

class ExpenseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "month",
    }
  }

  render() {
    return (
      <div className="content">
        <h1>Expense History</h1>
        <p>Here is a graph to visualize your past expenses. Choose to see trends for this week, this month, or this year.</p>
        <div class="tracker-container">
            <ul class="tabs">
                <li class="tab-selected" id="week">Week</li>
                <li class="tab" id="month">Month</li>
                <li class="tab" id="year">Year</li>
            </ul>
          <div class="graph">
            <h3>WEEK SUMMARY</h3>
          </div>
        </div>
      </div>
    );
  }
}

class WeekGraph extends React.Component {
  render() {
    return (
      <h3>WEEK SUMMARY</h3>
    )
  }
}

class MonthGraph extends React.Component {
  render() {
    return (
      <h3>MONTH SUMMARY</h3>
    )
  }
}

class YearGraph extends React.Component {
  render() {
    return (
      <h3>YEAR SUMMARY</h3>
    )
  }
}

export default ExpenseHistory;
