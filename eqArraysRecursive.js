const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    const item1 = array1[index];
    const item2 = array2[index];
    if (Array.isArray(item1) && Array.isArray(item2)) {
      if (!eqArrays(item1, item2)) return false;
    } else if (typeof item1 !== 'object' && typeof item2 !== 'object') {
      if (item1 !== item2) return false;
    } else {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, [3, 4, [5, 6, 7]]], [1, 2, [3, 4, [5, 6, 7]]]), true);
assertEqual(eqArrays([[1, 2], 3, 4, 5], [[1], 2, 3, 4, 5]), false);
assertEqual(eqArrays([[1, 2], 3, 4, 5], [1, [2, 3], 4, 5]), false);
assertEqual(eqArrays([1, 2, [3, 4, [5, 6, [7, 8, 9]]]], [1, 2, [3, 4, [5, 6, [7, 8, 9, 10]]]]), false);