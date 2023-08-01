const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  result ? console.log(`✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;