import React from 'react';

const Controls = ({events}) => {
  const { goToPrev, goToNext } = events;
  return [
    <button key="prev" className="carousel-prev" onClick={() => goToPrev()} />,
    <button key="next" className="carousel-next" onClick={() => goToNext()}/>
  ]
}

export default Controls;