export function atStart(position) {
  return position === 0;
}

export function atEnd(position, length) {
  return position === length - 1;
}

export function maxHeight(els) {
  let maxHeight = 0;
  els.forEach((el) => {
    maxHeight = el.clientHeight >= maxHeight ? el.clientHeight : maxHeight;
  })
  return maxHeight;
}

export function skipEvent(state, options) {
  const { position, length, direction, sliding, fading } = state;
  if(!options.wrap) {
    if(atStart(position, length) && direction === 'prev') return true;
    if(atEnd(position, length) && direction === 'next') return true;
  }
  return false;
}