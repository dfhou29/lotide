const flattenArrays = function(array) {
  let output = [];
  array.forEach(outerItem => {
    if (Array.isArray(outerItem)) {
      outerItem.forEach(innerItem => {
        output.push(innerItem);
      });
    } else {
      output.push(outerItem);
    }
  });
  return output;
};

module.exports = flattenArrays;