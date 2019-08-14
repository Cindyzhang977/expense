import React from 'react';
import './views/index.css';
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.showSlide = this.showSlide.bind(this);
    this.state = {
      imgs: [img3, img1, img2],
      currIndex: 0,
    }
  }

  componentDidMount() {
    const waitTime = 4000;
    window.addEventListener("load", () => {
      this.showSlide(this.state.currIndex);
      this.timer = setInterval(this.nextSlide, waitTime);
    });

    var arrows = document.getElementsByClassName('arrow');
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('click', () => {
        clearInterval(this.timer);
        this.timer = setInterval(this.nextSlide, waitTime);
      });
    }

    var dots = document.getElementsByClassName('dot');
    for (var j = 0; j < dots.length; j++) {
      dots[j].addEventListener('click', () => {
        clearInterval(this.timer);
        this.timer = setInterval(this.nextSlide, waitTime);
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  prevSlide() {
    if(this.state.currIndex === 0)
      return;

    this.setState(prevState => ({
      currIndex: prevState.currIndex - 1,
    }))
  }

  nextSlide() {
    if (this.state.currIndex === this.state.imgs.length - 1) {
      return this.setState({
        currIndex: 0,
      })
    }

    this.setState(prevState => ({
      currIndex: prevState.currIndex + 1,
    }));

  }

  slideWidth() {
    return document.querySelector('.slide').clientWidth;
  }

  showSlide(n) {
    return (
      <div className="slide">
        <img src={this.state.imgs[n]} alt="infographic"/>
      </div>
    );
  }

  render() {
    const dots = this.state.imgs.map((img, index) => {
      let isActive = "";
      if (this.state.currIndex === index) {
        isActive = "active";
      }
      return <Dot key={index} index={index} isActive={isActive} onClick = {() => {
        this.setState({currIndex: index});
        this.showSlide(index)}}/>;
    });

    return (
      <div>
        <div className="slider">
          <div className="slider-wrapper">
             {this.showSlide(this.state.currIndex)}
          </div>

          <LeftArrow prevSlide={this.prevSlide} />
          <RightArrow nextSlide={this.nextSlide} />
          <div className="dots">{dots}</div>

        </div>
      </div>
    );
  }
}

class Dot extends React.Component {
  render() {
    return(
      <span className={this.props.isActive + " dot"} onClick={this.props.onClick}></span>
    );
  }
}

function RightArrow(props) {
  return (
    <div className="nextArrow arrow" onClick={props.nextSlide}>
      <i className="right"></i>
    </div>
  );
}

function LeftArrow(props) {
  return (
    <div className="backArrow arrow" onClick={props.prevSlide}>
      <i className="left"></i>
    </div>
  );
}

export default SlideShow;
