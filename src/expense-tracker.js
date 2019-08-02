import React from 'react';
import './user.css';

class ExpenseTracker extends React.Component {
  render() {
    return (
      <div className="content">
          <div className="expense-tracker content-item">
              <h1>Expense Tracker</h1>
              <p>Enter your earnings and spendings to track your finances!</p>
              <form className="input-expense-form">
                  <select name="in-out">
                      <option value="type">-- Type --</option>
                      <option value="in">In</option>
                      <option value="out">Out</option>
                  </select>
                  <input className="amount-input" type="text" name="amount" placeholder="Amount" />
                  <input className="description-input" type="text" name="description" placeholder="Description" />
                  <input type="submit" value="Track Expense" className="button" />
              </form>

              <div className="tracker">
                  <div className="expense-input">---  You do not have any expenses to display  ---</div>
              </div>
          </div>
      </div>
    );
  }
}

export default ExpenseTracker;
