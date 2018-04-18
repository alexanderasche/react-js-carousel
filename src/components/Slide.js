import React from 'react';
import { setSlideStyles } from '../helpers';

const Slide = ({ state, options, index, slide }) => {
  return (
    <div className="carousel-slide" style={setSlideStyles(state, options, index)} >
      {slide}
    </div>
  );
};

export default Slide;