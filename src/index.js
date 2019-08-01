import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./imgs/logo.png";
import Login from "./login.js";
import Signup from "./signup.js";

// <Route path='/' component={Homepage} />

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
          <Signup onClick={() => this.showLoginBox}/> :
          <Login onClick={() => this.showSignupBox}/>}
      </div>
      // <div>
      //   <Navbar
      //     clickLogin={() => this.showLoginBox}
      //     clickSignup={() => this.showSignupBox}
      //   />
      //   <div className="desktop-signup">
      //     <div className="info-graphics"><SlideShow /></div>
      //     {this.state.isSignupOpen?
      //       <Signup onClick={() => this.showLoginBox}/> :
      //       <Login onClick={() => this.showSignupBox}/>}
      //   </div>
      // </div>
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

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);

export default Signup;
