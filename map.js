const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let x = 0; x < actual.length; x++) {
    if (actual[x] !== expected[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅Assertion passed: ${actual} === ${expected}`) : console.log(`❌Assertion failed: ${actual} !== ${expected}`);
};

const words = ["ground", "control", " ", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}


assertArraysEqual(map(words, word => word[0]), ['g', 'c', ' ', 'm', 't']);
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', ' ', 'r', 'm']);