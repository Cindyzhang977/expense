import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SlideShow from "./slideshow.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
    };
  }

  onFirstnameChange(e) {
    this.setState({firstname: e.target.value});
  }

  onLastnameChange(e) {
    this.setState({lastname: e.target.value});
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  onPasswordConfirm(e) {
    if (e.target.value !== this.state.password) {
      console.log("pass must match");
    } else {
      console.log("ok");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    //get input values from form
    for (let name of data.keys()) {
      data.set(name, data.get(name));
    }

    //convert FormData obj to json and push to endpoint for node
    var formInfo = {};
    data.forEach((value, key) => {
      formInfo[key] = value;
    });
    console.log("state: " + JSON.stringify(this.state));

    var json = JSON.stringify(formInfo);
    fetch('/signup-submit', { //endpoint
      method: 'POST',
      body: JSON.stringify(json),
    })
    .then(console.log(JSON.stringify(json)))

    fetch('/', { //endpoint
      method: 'POST',
      body: JSON.stringify(json),
    })
    .then(console.log(JSON.stringify(json)))
    // .then(res => console.log(res))

    // fetch('signup-submit', {
    //   method: 'GET',
    // })
    // .then((response) => console.log('Success: ', JSON.stringify(response)));
    //response is param for this function that stringifies response json file (aka the data)
  }

  render() {
    return (
      <div className="desktop-signup">
        <div className="info-graphics"><SlideShow /></div>
        <div className="form-container">
            <div className="heading"><h1>Sign Up</h1></div>
            <form onSubmit={this.handleSubmit}>
                <div className="name">
                    <div id="first-name">
                        First Name <br />
                        <input type="text" name="firstname" onChange={this.onFirstnameChange.bind(this)} /><br />
                    </div>
                    <div id="last-name">
                        Last Name <br />
                        <input type="text" name="lastname" onChange={this.onLastnameChange.bind(this)} /><br />
                    </div>
                </div>
                Email <br />
                <input type="text" name="email" onChange={this.onEmailChange.bind(this)} /><br />
                Username <br />
                <input type="text" name="username" onChange={this.onUsernameChange.bind(this)} /><br />
                Password <br />
                <input type="text" name="password" onChange={this.onPasswordChange.bind(this)} /><br />
                Confirm Password <br />
                <input type="text" name="password" onChange={this.onPasswordConfirm.bind(this)} /><br />
                <div align="right"><input type="submit" value="Sign Up" className="button" /></div>
                <p className="change-option"><button onClick={this.props.onClick()}>Already have an account? Log in here!</button></p>
            </form>
        </div>
      </div>

    );
  }
}

export default Signup;
