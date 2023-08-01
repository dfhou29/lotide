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

  return results;
};

module.exports = letterPositions;