import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isSignUpOpen: true
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isSignUpOpen: false});
  }

  showSignUpBox() {
    this.setState({isSignUpOpen: true, isLoginOpen: false});
  }

  render() {
    return (
      this.state.isSignUpOpen? <Signup /> : <Login />
    )
  };
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="navbar">
          <div class="menu-item"><a href="index.html" id="expense-logo">Expense</a></div>
          <ul class="menu">
              <li class="menu-item link"><a href="login.html">Log In</a></li>
              <li class="menu-item button"><a href="#">Sign Up</a></li>
          </ul>
      </div>
    );
  }
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="form-container">
          <div class="heading"><h>Sign Up</h></div>
          <form action="[specify form handler, what to do with form once submitted]">
              <div class="name">
                  <div id="first-name">
                      First Name <br />
                      <input type="text" name="firstname" /><br />
                  </div>
                  <div id="last-name">
                      Last Name <br />
                      <input type="text" name="lastname" /><br />
                  </div>
              </div>
              Email <br />
              <input type="text" name="email" /><br />
              Username <br />
              <input type="text" name="username" /><br />
              Password <br />
              <input type="text" name="password" /><br />
              Confirm Password <br />
              <input type="text" name="password" /><br />
              <div align="right"><input type="submit" value="Sign Up" class="button" /></div>
              <p class="change-option"><a href="login.html">Already have an account? Log in here!</a></p>
          </form>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="form-container">
          <div class="heading"><h>Log In</h></div>
          <form action="[specify form handler, what to do with form once submitted]">
              Username <br />
              <input type="text" name="username" /><br />
              Password <br />
              <input type="text" name="password" /><br />
              <div align="right"><input type="submit" value="Log In" class="button" /></div>
              <p class="change-option"><a href="index.html">Don't have an account? Sign up here!</a></p>
          </form>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Navbar />
    <Form />
  </div>,
  document.getElementById('root')
);
