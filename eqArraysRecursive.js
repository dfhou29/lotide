const eqArraysRecursive = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array1.length; index++) {
    const item1 = array1[index];
    const item2 = array2[index];
    if (Array.isArray(item1) && Array.isArray(item2)) {
      if (!eqArrays(item1, item2)) return false;
    } else if (typeof item1 !== 'object' && typeof item2 !== 'object') {
      if (item1 !== item2) return false;
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqArraysRecursive;