import React from 'react';
import { setSlideStyles } from '../helpers';

const Slide = ({ state, options, index, slide }) => {
  return React.createElement(
    'div',
    { className: 'carousel-slide', style: setSlideStyles(state, options, index) },
    slide
  );
};

export default Slide;