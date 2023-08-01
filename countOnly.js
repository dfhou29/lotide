const countOnly = function(allItems, itemsToCount) {
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

  return results;
};

module.exports = countOnly;

