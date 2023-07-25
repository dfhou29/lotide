const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");