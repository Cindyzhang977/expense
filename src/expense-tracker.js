import React from 'react';
import './user.css';

class ExpenseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackerItems: [],
      count: 0,
      id: 0, //unique id for each TrackerItem
    }
  }

  incrementCount() {
    this.setState({count: this.state.trackerItems.length})
    this.setState(prevState => ({
      id: prevState.id + 1,
    }))
  }

  removeItem(id) {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
    const items = this.state.trackerItems.filter(item => item.props.id !== id);
    this.setState({trackerItems: items});
    const removedItem = this.state.trackerItems.filter(item => item.props.id === id)[0];
    this.props.setAmount(-removedItem.props.amount, removedItem.props.type);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    var validType = false;
    var type = data.get("in-out");
    if (type === "-- Type --") {
      document.getElementById("invalid-type").style.display = "block";
    } else {
      validType = true;
      document.getElementById("invalid-type").style.display = "none";
    }

    var validAmount = false;
    var amount = parseFloat(data.get("amount"));
    if (isNaN(parseFloat(amount))) {
      document.getElementById("invalid-amount").style.display = "block";
    } else {
      validAmount = true;
      document.getElementById("invalid-amount").style.display = "none";
    }

    if (validType && validAmount) {
      this.props.setAmount(amount, type);
      this.state.trackerItems.unshift(<TrackerItem key={this.state.id}
                                                id={this.state.id}
                                                type={type}
                                                amount={amount}
                                                description={data.get("description")}
                                                incrementCount={this.incrementCount.bind(this)}
                                                delete={this.removeItem.bind(this)} />);
      document.getElementById("expense-form").reset();
    }
  }

  render() {
    console.log("count: " + this.state.count + " id: " + this.state.id);
    console.log(this.state.trackerItems);
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
              <form id="expense-form" className="input-expense-form" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
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
  console.log("In Tracker Item " + props.id);
  props.incrementCount();
  return (
    <tr id="test">
      <td className="type">{props.type}</td>
      <td className={"amount " + props.type}>{props.amount}</td>
      <td className="description">{props.description}</td>
      <td className="x"><button onClick={() => props.delete(props.id)}>x</button></td>
    </tr>
  );
}

export default ExpenseTracker;
