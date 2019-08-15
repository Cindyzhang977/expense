import React from 'react';
import './views/user.css';

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
          {this.props.header}
          <LimitSetter setSpendingLimit={this.setSpendingLimit.bind(this)} isReset={false} type={this.props.type}/>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.header}
          <ProgressBar
                  spendingLimit={this.state.spendingLimit}
                  amount={this.props.amount}
                  setSpendingLimit={this.setSpendingLimit.bind(this)}
                  type={this.props.type} />
        </div>
      );
    }
  }
}

class LimitSetter extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    var input = parseFloat(data.get("limit-value"));
    if (isNaN(parseFloat(input))) {
      document.getElementById("invalid-limit"+this.props.type).style.display = "block";
    } else {
      document.getElementById("invalid-limit"+this.props.type).style.display = "none";
      this.props.setSpendingLimit(data.get("limit-value"));
      if (this.props.isReset) {
        this.props.toggleReset();
      }
    }
  }

  render() {
    if (this.props.isReset) {
      return (
        <div className="content-item content">
            <form className="set-limit-form" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
                <input type="text" name="limit-value" className="limit-input" />
                <input type="submit" value={"Reset " + this.props.type} className="button limit-submit" />
                <input type='submit' className="button limit-submit" onClick={this.props.toggleReset} id="cancel" value="Cancel"/>
            </form>
            <p style={{display: "none"}} id={"invalid-limit" + this.props.type} className="invalid-input">* Invalid input *</p>
        </div>
      );
    }
    return (
      <div className="content-item content">
          <form className="set-limit-form" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
              <input type="text" name="limit-value" className="limit-input" />
              <input type="submit" value={"Set " + this.props.type} className="button limit-submit" />
          </form>
          <p style={{display: "none"}} id={"invalid-limit" + this.props.type} className="invalid-input">* Invalid input *</p>
      </div>
    );
  }
}

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetLimit: false,
    }
  }

  componentDidUpdate() {
    var percentage;
    if (this.props.type === "Limit") {
      percentage = document.getElementById("percentageLimit");
      if (this.props.amount / this.props.spendingLimit * 100 >= 100) {
        percentage.style.color = "red";
      } else {
        percentage.style.color = "inherit";
      }
    } else {
      percentage = document.getElementById("percentageGoal");
      if (this.props.amount / this.props.spendingLimit * 100 >= 100) {
        percentage.style.color = "green";
      } else {
        percentage.style.color = "inherit";
      }
    }
  }

  toggleReset() {
    this.setState({resetLimit: false});
  }

  toggleLimitSetter() {
    this.setState({resetLimit: true});
  }

  render() {
    var button = !this.state.resetLimit ? <EditButton onClick={this.toggleLimitSetter.bind(this)} type={this.props.type}/> :
                                          <LimitSetter setSpendingLimit={this.props.setSpendingLimit}
                                                       isReset={true}
                                                       toggleReset={this.toggleReset.bind(this)}
                                                       type={this.props.type} />;

    return(
      <div>
        <div className="content-item">{button}</div>
        <div className="progress content content-item">
            <div className="progress-tracker">
                <div className="progress-bar">
                    <div className="bar"><div className="filler" style={{width: this.props.amount / this.props.spendingLimit * 100 + '%'}}></div></div>
                </div>
                <p className="amount">${this.props.spendingLimit}</p>
            </div>
            <p id={"percentage" + this.props.type}>{(this.props.amount / this.props.spendingLimit * 100).toFixed(2)}%</p>
        </div>
      </div>
    );
  }
}

function EditButton(props) {
  return (
    <div className="progress content content-item">
      <button className="button" onClick={props.onClick}>Edit {props.type}</button>
    </div>
  );
}

export default SpendingLimit;
