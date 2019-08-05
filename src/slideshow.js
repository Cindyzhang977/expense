import React from 'react';
import './index.css';
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
      // translateValue: 0,
    }
  }

  prevSlide() {
    console.log("prev slide");
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
    console.log("currIndex" + this.state.currIndex);
    const dots = this.state.imgs.map((img, index) => {
      let isActive = "";
      if (this.state.currIndex === index) {
        isActive = "active";
      }
      console.log(isActive, index);
      return <Dot key={index} index={index} isActive={isActive} onClick = {() => {
        this.setState({currIndex: index});
        this.showSlide(index)}}/>;
    });

    return (
      <div>
        <div className="slider">
          <div className="slider-wrapper"
           style={{
             // transform: `translateX(${this.state.translateValue}px)`,
             // transition: 'transform ease-out 0.45s'
           }}>
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
    console.log("dot " + this.props.isActive + this.props.index);
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
