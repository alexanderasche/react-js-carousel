import chai from 'chai';
import atEnd from '../../src/helpers/atEnd';
const should = chai.should();

let position;
let length;

describe('atEnd helper function', () => {
    it('should return true if position = length -1', () => {
      position = 1;
      length = 2;
      const result = atEnd(position, length);
      result.should.be.eql(true);
    });
    it('should return false if position != length -1', () => {
      position = 0;
      length = 2;
      const result = atEnd(position, length);
      result.should.be.eql(false);
    });
});