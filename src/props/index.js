import { PropTypes as t } from 'prop-types';

const propTypes = {
  autoplay: t.bool,
  customControls: t.func,
  customIndicators: t.func,
  effect: t.oneOf(["slide", "fade"]),
  orientation: t.oneOf(["horizontal", "vertical"]),
  showControls: t.bool,
  showIndicators: t.bool,
  speed: t.number,
  wrap: t.bool
}

 const defaultProps = {
  autoplay: true,
  effect: "slide",
  orientation: "horizontal",
  showControls: true,
  showIndicators: true,
  speed: 350,
  wrap: true
}

export { propTypes, defaultProps };