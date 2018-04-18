import React from 'react';

const Indicators = ({events, count, options}) => {
  const { prevSlide } = events;
  return [
    <button key="prev" className="carousel-prev" onClick={() => prevSlide()} />,
    <button key="next" className="carousel-next" onClick={() => nextSlide()}/>
  ]
}

export default Indicators;