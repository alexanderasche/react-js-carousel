import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Carousel from '../src/components/Carousel';
import Header from './components/Header';

console.log(Carousel);

class Example extends Component {
  constructor() {
    super();
    this.state = {
      autoplay: true,
      customControls: undefined,
      customIndicators: undefined,
      customThumbs: undefined,
      effect: "slide",
      orientation: "horizontal",
      positionControls: "bottom",
      positionIndicators: "bottom",
      positionThumbs: "bottom",
      showControls: true,
      showIndicators: true,
      showThumbs: true,
      speed: 350,
      wrap: true
    }
  }

  render() {
    return [
      <Header />,
      <Carousel key="carousel" {...this.state}>
        <img src="./images/image_1.jpg" alt="image_1" />
        <img src="./images/image_2.jpg" alt="image_2" />
        <img src="./images/image_3.jpg" alt="image_3" />
        <img src="./images/image_4.jpg" alt="image_4" />
      </Carousel>
    ]
  }
}

ReactDom.render(
  <Example />,
  document.getElementById('root')
)
