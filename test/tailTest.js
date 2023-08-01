const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;
describe('Tests for tail()', () => {
  it('returns [] for []', () => {
    const actual = tail([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it('returns [Lab, Exercise] for [Lighthouse, Labs, Exercise]', () => {
    const actual = tail(['Lighthouse', 'Labs', 'Exercise']);
    const expected = ['Labs', 'Exercise'];
    assert.deepEqual(actual, expected);
  });
  it('returns [] for [1]', () => {
    const actual = tail([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
})