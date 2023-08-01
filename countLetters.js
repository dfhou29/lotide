const countLetters = function(sentence) {
  let trimmedSentence = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();
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

module.exports = countLetters;