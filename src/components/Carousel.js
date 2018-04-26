import React, { Component } from 'react';
import Track from './Track';
import Controls from './Controls';
import { propTypes, defaultProps} from '../props';
import { 
  initOrder,
  initOffset,
  initIndex,
  slidePrep,
  slideStart,
  slideEnd,
  getStartState,
  getEndState,
  maxHeight, 
  renderControls,
  renderIndicators
} from '../helpers';
import '../style.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      position: 0,
      length: this.props.children.length,
      direction: "next",
      target: "none",
      order: initOrder(this.props),
      offset: initOffset(this.props),
      index: initIndex(this.props),
      ready: true,
      sliding: false,
      fading: false
    }
    this.events = {
      goToPrev: this.goToPrev,
      goToNext: this.goToNext,
      goToIndex: this.goToIndex
    }
  }
  componentDidMount() {
    window.onload = () => this.setHeight();
    window.onresize = () => this.setHeight();
  }
  setHeight() {
    const slides = document.querySelectorAll(".carousel-slide");
    this.setState({ height: maxHeight(slides)});
  }
  goToPrev = () => {
    this.switchSlide("prev");
    // this.doSlide("prev");
  }
  goToNext = () => {
    this.switchSlide("next");
  }
  goToIndex = (index) => {
    this.switchSlide("none", index);
  }
  // switchSlides = (request) => {
  //   console.log(slidePrep(this.state, this.props, "next"));
  // }
  switchSlide = (direction, target) => {
    if(!this.state.sliding && !this.state.fading) {
      this.setState(slidePrep(this.state, this.props, direction, target), () => {
        setTimeout(() => {
          this.setState(slideStart(this.state, this.props, direction, target), () => {
            setTimeout(() => {
              this.setState(slideEnd(this.state, this.props, direction, target));
            }, this.props.speed);
          });
        },);
      });
    }
  }
  render() {
    return (
      <div className="carousel" style={{height: this.state.height}} >
        <Track slides={this.props.children} options={this.props} state={this.state}/>
        {renderControls(this.props, this.events)}
        {renderIndicators(this.state, this.props, this.events)}
      </div>
    )
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;