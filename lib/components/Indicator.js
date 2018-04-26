import React from 'react';
import classNames from 'classnames';

const Indicator = ({ state, options, events, index }) => {
  const { goToIndex } = events;
  const indicatorClass = classNames('carousel-indicator', {
    'active': state.position === index
  });
  return React.createElement('button', { id: index, className: indicatorClass, onClick: () => goToIndex(index) });
};

export default Indicator;