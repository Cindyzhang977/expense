import React from 'react';
import './user.css';

class SpendingLimit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spendingLimit: 0,
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
                  amount={this.props.amount} />
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

    var input = parseFloat(data.get("limit-value"));
    if (isNaN(parseFloat(input))) {
      document.getElementById("invalid-limit").style.display = "block";
    } else {
      document.getElementById("invalid-limit").style.display = "none";
      this.props.setSpendingLimit(data.get("limit-value"));
    }
  }

  render() {
    return (
      <div className="spending-limit content-item content">

          <form className="set-limit-form" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
              <input type="text" name="limit-value" className="limit-input" />
              <input type="submit" value="Set Limit" className="button limit-submit" />
          </form>
          <p style={{display: "none"}} id="invalid-limit" className="invalid-input">* Invalid input *</p>
      </div>
    );
  }
}

class ProgressBar extends React.Component {
  render() {
    return(
      <div className="progress content content-item">
          <input type="submit" value="Edit Limit" className="button" />
          <div className="progress-tracker">
              <div className="progress-bar">
                  <div className="bar"><div className="filler" style={{width: this.props.amount / this.props.spendingLimit * 100 + '%'}}></div></div>
              </div>
              <p>${this.props.spendingLimit}</p>
          </div>
          <p id="percentage">{(this.props.amount / this.props.spendingLimit * 100).toFixed(2)}%</p>
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
