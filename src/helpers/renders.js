import React from 'react';
import Slide from '../components/Slide';
import Controls from '../components/Controls';
import Indicators from '../components/Indicators';

export function renderSlides(state, options, slides) {
  return slides.map((slide, index, arr) => {
    return ( 
      <Slide 
        key={index} 
        index={index}
        slide={slide} 
        options={options} 
        state={state} 
      />
    );
  });
}

export function renderControls(options, events) {
  const { showControls } = options;
  if(showControls) {
    return ( 
      <Controls 
        events={events} 
      />
    );
  }
}

export function renderIndicators(state, options, events) {
  const { count } = state;
  if(showIndicators) {
    return ( 
      <Indicators
        events={events} 
        options={options}
      />
    );
  }
}