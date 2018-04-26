import React from 'react';

const Controls = ({ events }) => {
  const { goToPrev, goToNext } = events;
  return [React.createElement("button", { key: "prev", className: "carousel-prev", onClick: () => goToPrev() }), React.createElement("button", { key: "next", className: "carousel-next", onClick: () => goToNext() })];
};

export default Controls;