const assertEqual = require('../assertEqual');
const tail = require('../tail');

const testArray = ['Lighthouse', 'Labs', 'Exercise'];
const result = tail(testArray);
assertEqual(result[0], 'Labs');
assertEqual(result[1], 'Exercise');


// test case 2
const testArray2 = [];
const result2 = tail(testArray2);
assertEqual(result2[0], undefined);
assertEqual(testArray2.length, 0);

// test case 3
const testArray3 = [1];
const result3 = tail(testArray3);
assertEqual(result3[0], undefined);
assertEqual(testArray3.length, 1);