const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

// const findKeyByValueV2 = function(object, value) {
//   const keys = Object.keys(object);

//   for (let key of keys) {
//     if (object[key] === value) {
//       return key;
//     }
//   }
//   return undefined;
// };

module.exports = findKeyByValue;