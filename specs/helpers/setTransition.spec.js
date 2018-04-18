import chai from 'chai';
import setTransition from '../../src/helpers/setTransition';
const should = chai.should();

let transitioning;
let transition;
let speed;
let timing;

describe('setTransition helper function', () => {
  before(() => {
    transition = "transform";
    speed = ".25s";
    timing = "ease-in-out";
  });
  it('should return none if transitioning = true', () => {
    transitioning = true;
    const result = setTransition(transitioning, transition, speed, timing);
    result.should.be.eql("none");
  });
  it('should return transition if transitioning = false', () => {
    transitioning = false;
    const result = setTransition(transitioning, transition, speed, timing);
    result.should.be.eql("transform .25s ease-in-out");
  });
});