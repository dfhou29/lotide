const assertEqual = require("../assertEqual");
const head = require("../head");

const assert = require('chai').assert;

describe('Test for head()', ()=> {
  it('returns undefined for []', () => {
    const actual = head([]);
    const expected = undefined;
    assert.equal(actual, expected);
  });
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = 'Hello';
    assert.equal(actual, expected);
  });
})