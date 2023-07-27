const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
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






const bmw = {color: ["white", "black"], coupe: false};
const audi = {coupe: false, color: ["white", "black"]};
const iPhone = {color: "black", ram: ["8GB", "16GB"]};
const pixel = {color: "black", ram: ["8GB", "16GB"], make: "China"};


assertEqual(eqObjects(bmw, audi), true);
assertEqual(eqObjects(iPhone, pixel), false);