import React from 'react';
import './user.css';

class ExpenseTracker extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    var clearForm = false;

    var type = data.get("in-out");
    if (type === "-- Type --") {
      clearForm = false;
      document.getElementById("invalid-type").style.display = "block";
    } else {
      clearForm = true;
      document.getElementById("invalid-type").style.display = "none";
    }

    var amount = parseFloat(data.get("amount"));
    if (isNaN(parseFloat(amount))) {
      clearForm = false;
      document.getElementById("invalid-amount").style.display = "block";
    } else {
      clearForm = true;
      this.props.setAmount(amount);
      document.getElementById("invalid-amount").style.display = "none";
    }

    if (clearForm) {
      document.getElementById("expense-form").reset();
    }
  }

  render() {
    return (
      <div className="content">
          <div className="expense-tracker content-item">
              <h1>Expense Tracker</h1>
              <p>Enter your earnings and spendings to track your finances!</p>
              <form id="expense-form" className="input-expense-form" onSubmit={this.handleSubmit.bind(this)}>
                  <select name="in-out" required>
                      <option>-- Type --</option>
                      <option value="in">In</option>
                      <option value="out">Out</option>
                  </select>
                  <input className="amount-input" type="text" name="amount" placeholder="Amount" required />
                  <input className="description-input" type="text" name="description" placeholder="Description" required />
                  <input type="submit" value="Track Expense" className="button" />
              </form>
              <p id="invalid-type" className="invalid-input" style={{display: "none"}}>* Please select a valid type for the transaction *</p>
              <p id="invalid-amount" className="invalid-input" style={{display: "none"}}>* Please input a valid amount *</p>
              <div className="tracker">
                  <div className="expense-input">---  You do not have any expenses to display  ---</div>
              </div>
          </div>
      </div>
    );
  }
}

class TrackerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      amount: 0,
      description: "",
    }
  }

  // render() {
  //
  // }

}

export default ExpenseTracker;
