const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let trimmedSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
  console.log(trimmedSentence);
  let counts = {};
  for (let letter of trimmedSentence) {
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }
  
  return counts;
};

const sentence = "Lighthouse In the house";

console.log(countLetters(sentence));

assertEqual(countLetters(sentence)['h'], 4);