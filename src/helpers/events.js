import { atStart, atEnd, skipEvent } from './';

export function getStartState(state, options, target) {
  if(!skipEvent(state, options)) {
    return { 
      target: target !== "none" ? target : "none",
      sliding: options.effect === "slide" ? true : false,
      fading: options.effect === "fade" ? true : false, 
    }
  }
}

export function getEndState(state, options) {
  if(!skipEvent(state, options)) {
    const { position, length, direction, target } = state;
    let newPosition;
    if(direction !== 'none') {
      newPosition = atEnd(position, length) ? 0 : position + 1;
    }
    if(direction === 'prev') {
      newPosition = atStart(position, length) ? length - 1 : position - 1;
    }
    if(direction === 'none') {
      newPosition = target;
    }
    return {
      position: newPosition,
      sliding: false,
      fading: false
    }
  }
}