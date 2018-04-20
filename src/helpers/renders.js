import React from 'react';
import Slide from '../components/Slide';
import Controls from '../components/Controls';
import Indicator from '../components/Indicator';

export function renderSlides(state, options, slides) {
  return slides.map((slide, index, arr) => {
    return ( 
      <Slide 
        key={index} 
        index={index}
        state={state} 
        options={options}
        slide={slide} 
      />
    );
  });
}

export function renderControls(options, events) {
  if(options.showControls) {
    return ( 
      <Controls events={events} />
    );
  }
}

export function renderIndicators(state, options, events) {
  if(options.showIndicators) {
    let indicators = [];
    for(let i=0; i<state.length; i++) {
      indicators.push(
        <Indicator 
          key={i} 
          index={i} 
          state={state} 
          options={options}
          events={events}
        />
      )
    }
    return (
      <div className="carousel-indicators">
        {indicators}
      </div>
    );
  }
}