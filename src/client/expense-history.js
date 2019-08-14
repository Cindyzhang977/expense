import React from 'react';
import "./views/expense-history.css";

class ExpenseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Week",
      graphs: {"Week": <WeekGraph />, "Month": <MonthGraph />, "Year": <YearGraph />},
    }
  }

  changeActiveTab(newTab) {
    this.setState({activeTab: newTab});
  }

  render() {
    var tabs = ["Week", "Month", "Year"].map((id) => {
        var classname = "tab";
        if (id === this.state.activeTab) {
          classname = "tab-selected";
        }
        return <Tab className={classname} id={id} changeActiveTab={this.changeActiveTab.bind(this)} />;
    });

    return (
      <div className="content">
        <h1>Expense History</h1>
        <p>Here is a graph to visualize your past expenses. Choose to see trends for this week, this month, or this year.</p>
        <div className="tracker-container">
            <ul className="tabs">
                {tabs}
            </ul>
          <div className="graph">
            {this.state.graphs[this.state.activeTab]}
          </div>
        </div>
      </div>
    );
  }
}

function Tab(props) {
  return <li className={props.className} id={props.id} onClick={() => {props.changeActiveTab(props.id)}}>{props.id}</li>
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
