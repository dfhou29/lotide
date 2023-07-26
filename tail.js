const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const tail = array.slice(1);
  return tail;
};


//test case 1
// const testArray = ['Lighthouse', 'Labs', 'Exercise'];
// const result = tail(testArray);
// console.log(assertEqual(result[0], 'Labs'));
// console.log(assertEqual(result[1], 'Exercise'));
// console.log(assertEqual(testArray.length, 3));

//test case 2
// const testArray = [];
// const result = tail(testArray);
// console.log(assertEqual(result[0], undefined));
// console.log(assertEqual(testArray.length, 0));

//test case 3
const testArray = [1];
const result = tail(testArray);
console.log(assertEqual(result[0], undefined));
console.log(assertEqual(testArray.length, 1));

