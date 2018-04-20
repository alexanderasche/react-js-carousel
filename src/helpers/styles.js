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
  const { effect } = options;
  return {
    order: effect === "slide" ? setOrder(state, index) : "",
    position: effect === "fade" ? setPosition(state, index) : "relative",
    zIndex: effect === "fade" ? setIndex(state, index) : "",
    opacity: effect === "fade" ? setOpacity(state, index) : "",
    transitionProperty: effect === "fade" && !state.fading ? "opacity" : "",
    transitionDuration: effect === "fade" ? `${options.speed}ms` :  ""
  }
}
function setOrder(state, index) {
  const { position, length } = state;
  let order = index;
  if(state.direction !== "none") {
    if(atStart(position, length) && index === length - 1) index = -1
    if(atEnd(position, length) && index === 0) index = length
  }
  return index
}
function setPosition(state, index) {
  let position = "absolute";
  if(state.position === index) position = "relative";
  return position;
}
function setIndex(state, index) {
  const { position, length, direction, target, fading } = state;
  let zIndex = -2;
  if(!fading) zIndex = position === index ? 0 : -2;
  else {
    if(direction === "none" && index === target) zIndex = -1
    if(direction === "prev") {
      if(index === position - 1 || atStart(position, length) && index === length - 1) zIndex = -1;
    }
    if(direction === 'next') {
      if(index === position + 1 || atEnd(position, length) && index === 0) zIndex = -1;
    }
  }
  return zIndex;
}
function setOpacity(state, index) {
  const { position, length, direction, fading } = state;
  const zIndex = setIndex(state, index);
  return zIndex === -1 || zIndex === 0 ? 1 : 0;
}