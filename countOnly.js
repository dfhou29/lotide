const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   //declare an object with properties that has value true in itemsToCount
//   let output = {};
//   for (let itemToCount in itemsToCount) {
//     if (itemsToCount[itemToCount] === true) {
//       output[itemToCount] = 0;
//       //console.log('itemtoCount:', itemToCount, itemsToCount[itemToCount]);
//     }
//   }

//   // iterate through allItems, if the value matches to any output's property, count++
//   for (let item of allItems) {
//     for (let nameToCount in output) {
//       if (item === nameToCount) {
//         output[nameToCount]++;
//       }
//     }
//   }

//   // delete any property in output if the count is 0
//   for (let nameToCount in output) {
//     if (output[nameToCount] === 0) {
//       delete output[nameToCount];
//     }
//   }
  
//   console.log('output:', output);
//   return output;
// };

const countOnlyV2 = function(allItems, itemsToCount) {
  let results = {};

  // count all appearance in allItems and add them to output
  allItems.forEach(item => {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  });

  console.log("results:", results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnlyV2(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);