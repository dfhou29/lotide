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

const without = function(source, itemsToRemove) {
  // declare output array
  let output = [];
  //iterate through all source item
  for (let x = 0; x < source.length; x++) {
    // declare boolean keep to track if the item in source matches the item to be removed
    let keep = true;
    // iterate through itemsToRemove and compare with source[x]
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        keep = false;
      }
    }
    //if no matches found between source item and item to be removed, push the source item into output array.
    if (keep) {
      output.push(source[x]);
    }
  }
  return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(['a', 'b', 'c'], [1, 2, 3]), ['a', 'b', 'c']);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1, 2, 3]), []);