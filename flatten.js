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

const flattenArrays = function(array) {
  let output = [];
  array.forEach(outerItem => {
    if (Array.isArray(outerItem)) {
      outerItem.forEach(innerItem => {
        output.push(innerItem);
      });
    } else {
      output.push(outerItem);
    }
  });
  return output;
};

assertArraysEqual(flattenArrays([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flattenArrays([1, [6]]), [1, 6]);
assertArraysEqual(flattenArrays([]), []);
assertArraysEqual(flattenArrays([1, ['a', 'b', 'c'], ['d', 'e', 'f']]), [1, 'a', 'b', 'c', 'd', 'e', 'f']);