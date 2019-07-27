import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./imgs/logo.png";

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
    console.log("show login");
    this.setState({isLoginOpen: true, isSignupOpen: false});
  }

  showSignupBox() {
    console.log("show signup");
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
          <Signup onClick={() => this.showLoginBox}/> :
          <Login onClick={() => this.showSignupBox}/>}
      </div>
    )
  };
}

function Navbar(props) {
  return (
    <div className="navbar">
        <div className="menu-item"><a href="index.html" id="expense-logo">expen<img id="logo" src={logo} alt="expense logo"/>e</a></div>
        <ul className="menu">
            <li className="menu-item link"><button onClick={props.clickLogin()}>Log In</button></li>
            <li className="menu-item button"><button onClick={props.clickSignup()}>Sign Up</button></li>
        </ul>
    </div>
  );
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   firstname=null,
    //   //continue...
    // };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      console.log(data.keys());
      const input = form.elements[name];
      // const parserName = input.dataset.parse;
      // console.log(parserName);
      data.set(name, data.get(name));
      console.log(name + " " + data.get(name));
      // if (parserName) {
      //   const parser = inputParsers[parserName];
      //   const parsedValue = parser(data.get(name));
      //   data.set(name, parsedValue);
      // }
    }

    // const temp = {name: "Cindy"};
    // console.log(temp);
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    })
    .then(res => console.log(res));
    // .then(res => console.log(res))
    // .then(temp => console.log("success!!", JSON.stringify(temp)))
    // .then((response) => console.log('Success: ', JSON.stringify(response)))
    // .catch(err => console.log(err));

    // .then(function (res) {
    //   console.log(res);
    //     return res, data
    // })
    // .then(function (data) {
    //     console.log("data " + data);
    // }).catch(function (err) {
    //     console.log(err)
    // })
    //
    // fetch('/api/form-submit-url', {
    //   method: 'GET',
    // })
    // .then((response) => console.log('Success: ', JSON.stringify(response)));
    //response is param for this function that stringifies response json file (aka the data)
  }

  render() {
    return (
      <div className="form-container">
          <div className="heading"><h1>Sign Up</h1></div>
          <form onSubmit={this.handleSubmit}>
              <div className="name">
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
              <div align="right"><input type="submit" value="Sign Up" className="button" /></div>
              <p className="change-option"><button onClick={this.props.onClick()}>Already have an account? Log in here!</button></p>
          </form>
      </div>
    );
  }
}

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="form-container">
          <div className="heading"><h1>Log In</h1></div>
          <form action="[specify form handler, what to do with form once submitted]">
              Username <br />
              <input type="text" name="username" /><br />
              Password <br />
              <input type="text" name="password" /><br />
              <div align="right"><input type="submit" value="Log In" className="button" /></div>
              <p className="change-option"><button onClick={this.props.onClick()}>Don't have an account? Sign up here!</button></p>
          </form>
      </div>
    );
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
