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

const eqObjects = (object1, object2) => {
  console.log('object1:', object1);
  console.log('object2:', object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (object2.hasOwnProperty(key)) {
      if (typeof object1[key] === "object" && typeof object2[key] === 'object') {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) return false;
        } else if (!eqObjects(object1[key], object2[key])) return false;
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 },{ a: { y: 0, z: 1 }, b: 2 } ), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: [0, 1], z: {i: 0, j: 0} }, b: {k: 0, l: 0} }, { a: { y: [0, 1], z: {i: 0, j: 0} }, b: {k: 0, l: 0} }), true);