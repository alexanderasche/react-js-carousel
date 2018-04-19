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

export function trimObject(obj, keys) {
  let newObj = {};
  for(let key in obj) {
    keys.indexOf(key) === -1 ? newObj[key] = obj[key] : ""
  }
  return newObj;
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


export function skipEvent(state, options) {
  const { position, length, direction, sliding, fading } = state;
  if(!options.wrap) {
    if(atStart(position, length) && direction === 'prev') return true;
    if(atEnd(position, length) && direction === 'next') return true;
  }
  return false;
}