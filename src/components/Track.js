import React from 'react';
import { renderSlides, setTrackStyles } from '../helpers';

const Track = ({ state, options, slides }) => {
  return (
    <div className="carousel-track" style={setTrackStyles(state, options)}>
      {renderSlides(state, options, slides)}
    </div>
  );
};

export default Track;