import React from 'react';
import './dashboard.css';

class SpendingLimit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spendingLimit: 0,
      amount: 0,
    }
  }

  setSpendingLimit(limit) {
    this.setState({spendingLimit: limit});
  }

  render() {
    if (!this.state.spendingLimit) {
      return (
        <div>
          <Header />
          <LimitSetter setSpendingLimit={this.setSpendingLimit.bind(this)} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <ProgressBar
                  spendingLimit={this.state.spendingLimit}
                  amount={this.state.amount} />
        </div>
      );
    }
  }
}

class LimitSetter extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    console.log(data.get("limit-value")); //correct
    this.props.setSpendingLimit(data.get("limit-value"));
  }

  render() {
    return (
      <div className="spending-limit content-item content">

          <form className="set-limit-form" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" name="limit-value" className="limit-input" />
              <input type="submit" value="Set Limit" className="button limit-submit" />
          </form>
      </div>
    );
  }
}

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.amount / this.props.spendingLimit * 100,
    }
  }

  //props: amount, spendingLimit
  render() {
    return(
      <div className="progress content content-item">
          <input type="submit" value="Edit Limit" className="button" />
          <div className="progress-tracker">
              <div className="progress-bar">
                  <div className="bar"><div className="filler" style={{width: this.state.width+'%'}}></div></div>
              </div>
              <p>${this.props.spendingLimit}</p>
          </div>
          <p id="percentage">{this.state.width}%</p>
      </div>
    );
  }
}

function Header(props) {
  return (
    <div className="spending-header content">
      <h1>Spending limit</h1>
      <p>Set a monthly spending limit to help you reach your goals!</p>
    </div>
  );
}

export default SpendingLimit;
