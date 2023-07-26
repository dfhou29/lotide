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



const middle = function(arr) {
  //helper function to determine if an array has even numbers of elements
  const arrayIsEven = function(arr) {
    return arr.length % 2 === 0 ? true : false;
  };

  let output = [];

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length > 2) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    if (arrayIsEven(arr)) {
      while (startIndex + 1 !== endIndex) {
        startIndex++;
        endIndex--;
      }
      output.push(arr[startIndex]);
      output.push(arr[endIndex]);
    } else {
      while (startIndex !== endIndex) {
        startIndex++;
        endIndex--;
      }
      output.push(arr[startIndex]);
    }
  } else {
    output = [];
  }
  console.log('output:', output);
  return output;
};


middle([1,2,3,4,5]);

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);