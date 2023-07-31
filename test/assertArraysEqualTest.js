const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], []); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1, 0]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false