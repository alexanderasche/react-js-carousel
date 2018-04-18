import { atStart, atEnd } from './';

export function setTrackStyles(state, options) {
  if(options.effect === "slide") {
    return {
      flexDirection: options.orientation === "horizontal" ? "row" : "column",
      transitionProperty: state.sliding ? "transform" : "none",
      transitionDuration: `${options.speed}ms`,
      transform: `translate${setAxis(options)}(${setOffset(state)}%)`
    }
  }
}
function setAxis(options) {
  return options.orientation === "horizontal" ? "X" : "Y";
}
function setOffset(state) {
  return !state.sliding ? stillOffset(state) : slidingOffset(state);
}
function stillOffset(state) {
  const { position, length, direction } = state;
  let offset = position * -100;
  if(direction !== 'none') {
    if(atStart(position, length)) offset = -100
    if(atEnd(position, length)) offset = (position - 1) * -100;
  }
  return offset;
}
function slidingOffset(state) {
  const { position, length, direction, target } = state;
  let offset; 
  if(direction === 'none') offset = target * -100;
  if(direction === 'prev') {
    offset = (position - 1) * -100
    if(atStart(position, length)) offset = 0
    if(atEnd(position, length)) offset = (position - 2) * -100
  }
  if(direction === 'next') {
    offset = (position + 1) * -100
    if(atStart(position, length)) offset = (position + 2) * -100 
    if(atEnd(position, length)) offset = position * -100
  }
  return offset;
}

export function setSlideStyles(state, options, index) {
  return {
    position: options.effect === "slide" ? "" : "absolute", 
    order: options.effect === "slide" ? setOrder(state, options, index) : null,
    zIndex: options.effect === "slide" ? "" : setIndex(state, options, index)
  }
}
function setOrder(state, options, index) {
  const { position, length } = state;
  if(atStart(position, length) && index === length - 1) return -1
  if(atEnd(position, length) && index === 0) return length
  return index
}

function setIndex(state, options, index) {
  const { position, length, direction } = state;
  return position - index;
}