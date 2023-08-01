const takeUntil = function(arr, callback) {
  let results = [];
  for (const item of arr) {
    if (callback(item)) return results;
    results.push(item);
  }
};

module.exports = takeUntil;