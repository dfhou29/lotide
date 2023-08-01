const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("length1:", Object.keys(object1).length);
    console.log("length2:", Object.keys(object2).length);
    return false;
  }

  const keys = Object.keys(object1);
  for (let key of keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key],object2[key]) === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;