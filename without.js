const without = function(source, itemsToRemove) {
  // declare output array
  let output = [];
  //iterate through all source item
  for (let x = 0; x < source.length; x++) {
    // declare boolean keep to track if the item in source matches the item to be removed
    let keep = true;
    // iterate through itemsToRemove and compare with source[x]
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        keep = false;
      }
    }
    //if no matches found between source item and item to be removed, push the source item into output array.
    if (keep) {
      output.push(source[x]);
    }
  }
  return output;
};

module.exports = without;