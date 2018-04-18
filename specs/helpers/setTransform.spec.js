import chai from 'chai';
import setTransform from '../../src/helpers/setTransform';
const should = chai.should();

let params = {
  position: "",
  length: "",
  sliding: "",
  action: "",
  target: "",
  orientation: "",
}

/*describe('setTransform helper function', () => {
  before(() => {
    params.position = 0;
    params.length = 3;
    params.target = 1;
    params.orientation = 'horizontal';
  });
  describe('action === direct', () => {
    before(() => {
      params.action = "direct";
    });
    it('should return position * -100 if !sliding', () => {
      params.sliding = false;
      const result = setTransform(params);
      result.should.be.eql(`translateX(${params.position * -100})`);
    });
    it('should return target * -100 if sliding', () => {
      params.sliding = true;
      const result = setTransform(params);
      result.should.be.eql(`translateX(${params.target * -100})`);
    });
  });
  describe('action === next', () => {
    before(() => {
      params.action = "next";
    });
    it('should return (position -1) * -100 if !sliding & atEnd', () => {
      params.sliding = false;
      params.position = 2;
      const result = setTransform(params);
      result.should.be.eql(`translateX(${(params.position - 1) * -100})`);
    });
  });
});*/