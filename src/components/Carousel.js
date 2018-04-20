import React, { Component } from 'react';
import Track from './Track';
import Controls from './Controls';
import { propTypes, defaultProps} from '../props';
import { 
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
    this.doSlide("prev");
  }
  goToNext = () => {
    this.doSlide("next");
  }
  goToIndex = (index) => {
    this.doSlide("none", index);
  }
  doSlide = (direction, target) => {
    if(!this.state.sliding && !this.state.fading) {
      this.setState({ direction: direction }, () => {
        this.setState(getStartState(this.state, this.props, target), () => {
          setTimeout(() => {
            this.setState(getEndState(this.state, this.props));
          }, this.props.speed);
        });
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