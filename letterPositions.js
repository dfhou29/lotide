const letterPositions = function(sentence) {
  const trimmedSentence = sentence.replace(/[^A-Za-z ]/g, ' ');
  const results = {};
  for (let x = 0; x < trimmedSentence.length; x++) {
    if (trimmedSentence[x] !== ' ') {
      if (results[trimmedSentence[x]]) {
        results[trimmedSentence[x]].push(x);
      } else {
        results[trimmedSentence[x]] = [x];
      }
    }
  }
  console.log("trimmed sentence:", trimmedSentence);
  console.log("results:", results);
  return results;
};


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

assertArraysEqual(letterPositions('Hello! Lighthouse Labs').L, [7, 18]);