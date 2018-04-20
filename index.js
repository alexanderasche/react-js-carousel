import React from 'react'
import ReactDom from 'react-dom'
import Carousel from '../src/components/Carousel';

const Example = () => {

  return (
    <Carousel>
      <img src="./images/image_1.jpg" alt="image_1" />
      <img src="./images/image_2.jpg" alt="image_2" />
      <img src="./images/image_3.jpg" alt="image_3" />
      <img src="./images/image_4.jpg" alt="image_4" />
    </Carousel>
  )
}

ReactDom.render(
  <Example />,
  document.getElementById('root')
)
