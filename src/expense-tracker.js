import React from 'react';
import './user.css';

class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackerItems: [],
      count: 0,
    }
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

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
      document.getElementById("invalid-amount").style.display = "none";
    }

    if (clearForm) {
      this.props.setAmount(amount, type);
      this.state.trackerItems.unshift(<TrackerItem key={this.state.count}
                                                type={type}
                                                amount={amount}
                                                description={data.get("description")}
                                                incrementCount={this.incrementCount.bind(this)} />);
      document.getElementById("expense-form").reset();
    }
  }

  render() {
    try {
      if (this.state.count === 0) {
        document.getElementById("no-expenses").style.display = "block";
      } else {
        document.getElementById("no-expenses").style.display = "none";
      }
    } catch(err) {
      //do nothing
    }

    return (
      <div className="content">
          <div className="expense-tracker content-item">
              <h1>Expense Tracker</h1>
              <p>Enter your earnings and spendings to track your finances!</p>
              <form id="expense-form" className="input-expense-form" onSubmit={this.handleSubmit.bind(this)}>
                  <select name="in-out" required>
                      <option>-- Type --</option>
                      <option value="In">In</option>
                      <option value="Out">Out</option>
                  </select>
                  <input className="amount-input" type="text" name="amount" placeholder="Amount" required />
                  <input className="description-input" type="text" name="description" placeholder="Description" required />
                  <input type="submit" value="Track Expense" className="button" />
              </form>
              <p id="invalid-type" className="invalid-input" style={{display: "none"}}>* Please select a valid type for the transaction *</p>
              <p id="invalid-amount" className="invalid-input" style={{display: "none"}}>* Please input a valid amount *</p>
              <div className="tracker">
                  <div id="no-expenses">---  You do not have any expenses to display  ---</div>
                  <table>
                    {this.state.trackerItems.map((item, index) => {
                        return <tbody key={index}>{item}</tbody>;
                      })
                    }
                  </table>
              </div>
          </div>
      </div>
    );
  }
}

function TrackerItem(props) {
  props.incrementCount();
  return (
    <tr id="test">
      <td className="type">{props.type}</td>
      <td className={"amount " + props.type}>{props.amount}</td>
      <td className="description">{props.description}</td>
    </tr>
  );
}

export default ExpenseTracker;
