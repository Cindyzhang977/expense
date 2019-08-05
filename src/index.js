import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import logo from "./imgs/logo.png";
import Login from "./login.js";
import Signup from "./signup.js";
import UserRouting from "./user.js";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showSignupBox = this.showSignupBox.bind(this);
    this.showLoginBox = this.showLoginBox.bind(this);
    this.state = {
      isLoginOpen: false,
      isSignupOpen: true
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isSignupOpen: false});
  }

  showSignupBox() {
    this.setState({isSignupOpen: true, isLoginOpen: false});
  }

  render() {
    return (
      <div>
        <Navbar
          clickLogin={() => this.showLoginBox}
          clickSignup={() => this.showSignupBox}
        />
        {this.state.isSignupOpen?
          <Signup onClick={() => this.showLoginBox} /> :
          <Login onClick={() => this.showSignupBox} />}
      </div>
    )
  };
}

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="menu-item"><Link to="/" id="expense-logo">expen<img id="logo" src={logo} alt="expense logo"/>e</Link></div>
      <ul className="menu">
          <li className="menu-item link"><button onClick={props.clickLogin()}>Log In</button></li>
          <li className="menu-item button"><button onClick={props.clickSignup()}>Sign Up</button></li>
      </ul>
    </div>
  );
}

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={UserRouting} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

export default Signup;
