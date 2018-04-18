import chai from 'chai';
import atStart from '../../src/helpers/atStart';
const should = chai.should();

let position;

describe('atStart helper function', () => {
    it('should return true if position = 0', () => {
      position = 0;
      const result = atStart(position);
      result.should.be.eql(true);
    });
    it('should return false if position != 0', () => {
      position = 1;
      const result = atStart(position);
      result.should.be.eql(false);
    });
});