export function initOrder(props) {
  const { effect, orientation, children } = props;
  if (effect === "slide") {
    let order = [];
    for (let i = 0; i < children.length; i++) {
      order.push(i);
    }
    return order;
  }
}

export function initOffset(props) {
  const { effect } = props;
  if (effect === "slide") return 0;
}

export function initIndex(props) {
  const { effect, children } = props;
  if (effect === "slide") {
    let index = [0, -1];
    for (let i = 0; i < children.length; i++) {
      if (i > 1) index.push(-2);
    }
    return index;
  }
}