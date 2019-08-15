import React from 'react';
import './views/index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
      <div id="login-filler"></div>
      <div className="form-container login">
          <div className="heading"><h1>Log In</h1></div>
          <form action="[specify form handler, what to do with form once submitted]">
              Username <br />
              <input type="text" name="username" required/><br />
              Password <br />
              <input type="password" name="password" required/><br />
              <div align="right"><input type="submit" value="Log In" className="button" /></div>
              <p className="change-option"><button onClick={this.props.onClick()}>Don't have an account? Sign up here!</button></p>
          </form>
      </div>
      </div>
    );
  }
}

export default Login;
