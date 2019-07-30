import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./imgs/logo.png";
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";

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
    console.log(<SlideShow />);

    return (
      // <div>
      //   <Navbar
      //     clickLogin={() => this.showLoginBox}
      //     clickSignup={() => this.showSignupBox}
      //   />
      //   {this.state.isSignupOpen?
      //     <Signup onClick={() => this.showLoginBox}/> :
      //     <Login onClick={() => this.showSignupBox}/>}
      // </div>
      <div>
        <Navbar
          clickLogin={() => this.showLoginBox}
          clickSignup={() => this.showSignupBox}
        />
        <div className="desktop-signup">
          <div className="info-graphics"><SlideShow /></div>
          {this.state.isSignupOpen?
            <Signup onClick={() => this.showLoginBox}/> :
            <Login onClick={() => this.showSignupBox}/>}
        </div>
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

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.state = {
      imgs: [img1, img2],
      currIndex: 0,
      // translateValue: 0,
    }
  }

  prevSlide() {
    if(this.state.currIndex === 0)
      return;

    this.setState(prevState => ({
      currIndex: prevState.currIndex - 1,
      // translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  nextSlide() {
    console.log("next slide");
    if (this.state.currIndex === this.state.imgs.length - 1) {
      return this.setState({
        currIndex: 0,
        // translateValue: 0
      })
    }

    this.setState(prevState => ({
      currIndex: prevState.currIndex + 1,
      // translateValue: prevState.translateValue + -(this.slideWidth()) //fix later to loop
    }));

  }

  slideWidth() {
    return document.querySelector('.slide').clientWidth
  }

  showSlide(n) {
    return (
      <div className="slide">
        <img src={this.state.imgs[n]} />
      </div>
    );
  }

  render() {
    console.log("slider render");
    console.log("currIndex" + this.state.currIndex);

    return (
      <div className="slider">
        <div className="slider-wrapper"
         style={{
           transform: `translateX(${this.state.translateValue}px)`,
           transition: 'transform ease-out 0.45s'
         }}>
           {this.showSlide(this.state.currIndex)}
        </div>

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}

function Slide(props) {
  return <div className="slide"><img src={img1} /></div>
}

function RightArrow(props) {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="arrow right"></i>
    </div>
  );
}

function LeftArrow(props) {
  return (
    <div className="backArrow" onClick={props.prevSlide}>
      <i className="arrow left"></i>
    </div>
  );
}

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
    // .then(res => console.log(res))

    // fetch('signup-submit', {
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
    );
  }
}

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

export default Signup;
