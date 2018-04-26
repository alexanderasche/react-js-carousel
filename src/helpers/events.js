import { atStart, atEnd, skipEvent } from './';

export function slidePrep(state, props, direction, target) {
  const { position, length } = state;
  const { effect } = props;
  const starting = atStart(position, length);
  const ending = atEnd(position, length);
  return {
    order: orderPrep(starting, ending, length, direction),
    offset: offsetPrep(starting, ending, position, length, direction),
    index: indexPrep(starting, ending, position, length, direction, target)
  }
}
function orderPrep(starting, ending, length, direction) {
  let order = [];
  for(let i=0; i<length; i++) { order.push(i) }
  if(starting && direction === "prev") order[length - 1] = -1;
  if(ending && direction === "next") order[0] = length;
  return order;
}
function offsetPrep(starting, ending, position, length, direction) {
  let offset = position * -100;
  if(starting && direction === "prev") offset = -100;
  if(ending && direction === "next") offset = (position - 1) * -100; 
  return offset;
}
function indexPrep(starting, ending, position, length, direction, target) {
  let index = [];
  for(let i=0; i<length; i++) { index.push(-2) }
  index[position] = 0;
  if(direction === "none") index[target] = -1;
  if(direction === "prev") {
    starting ? index[length - 1] = -1 : index[position - 1] = -1
  }
  if(direction === "next") {
    ending ? index[0] = -1 : index[position + 1] = -1
  }
  return index;
}

export function slideStart(state, props, direction, target) {
  const { offset } = state;
  const { effect } = props;
  return {
    offset: offsetStart(offset, direction, target),
    sliding: effect === "slide" ? true : false,
    fading: effect === "fading" ? true : false
  }
}
function offsetStart(offset, direction, target) {
  if(direction === "none") return target * -100
  if(direction === "prev") return offset + 100
  if(direction === "next") return offset - 100
}

export function slideEnd(state, props, direction, target) {
  const { position, length } = state;
  const starting = atStart(position, length);
  const ending = atEnd(position, length);
  let newPosition;
  if(direction === "none") newPosition = target
  if(direction === "prev") {
    newPosition = starting ? length - 1 : position - 1
  }
  if(direction === "next") {
    newPosition = ending ? 0 : position + 1 
  }
  return {
    position: newPosition,
    sliding: false,
    fading: false
  }
}



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
    return {
      ...state,
      ready: false
    }
    // const { position, length, direction, target } = state;
    // let newPosition;
    // if(direction === 'next') {
    //   newPosition = atEnd(position, length) ? 0 : position + 1;
    // }
    // if(direction === 'prev') {
    //   newPosition = atStart(position, length) ? length - 1 : position - 1;
    // }
    // if(direction === 'none') {
    //   if(atEnd(position, length)) newPosition = 0;
    //   if(atStart(position, length)) newPosition = length -1;
    //   newPosition = target;
    // }
    // return {
    //   position: newPosition,
    //   ready: false,
    //   sliding: false,
    //   fading: false
    // }
  }
}