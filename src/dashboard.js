import React from 'react';
// import ReactDOM from 'react-dom';
// import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom';
import "./user.css";
import SpendingLimit from "./spending-limit.js";
import ExpenseTracker from "./expense-tracker.js";
// import Profile from "./profile.js";
// import HomePage from "./index.js";
// import logo from "./imgs/logo.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }

  setAmount(value) {
    this.setState({amount: this.state.amount + value});
  }

  render() {
    return (
      <div>
        <SpendingLimit amount={this.state.amount} />
        <ExpenseTracker setAmount={this.setAmount.bind(this)} />
      </div>
    );
  }
}
//
// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleMenu.bind(this);
//   }
//
//   toggleMenu() {
//     return;
//   }
//
//   render() {
//     return (
//       <div className="nav">
//           <div className="navbar">
//               <div className="menu-item"><Link to="/" id="expense-logo">expen<img id="logo" src={logo} alt="expense logo"/>e</Link></div>
//               <div className="menu-icon" onClick={this.toggleMenu}>
//                   <span className="line"></span>
//                   <span className="line"></span>
//                   <span className="line"></span>
//               </div>
//           </div>
//           <ul id="menu">
//               <li><div className="nav-link"><Link to="/dashboard">Dashboard</Link></div></li>
//               <li><div className="nav-link">Expense History</div></li>
//               <li><div className="nav-link"><Link to="/manage-profile">Manage Profile</Link></div></li>
//               <li><div className="nav-link"><Link to="/">Log Out</Link></div></li>
//           </ul>
//       </div>
//     );
//   }
// }


// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/expense-history" component={HomePage} />
//       <Route path="/manage-profile" component={Profile} />
//     </div>
//   </Router>
// )



export default Dashboard;
