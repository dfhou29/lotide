const findKey = (data, callback) => {
  for( key in data) {
    if (callback(data[key])) return key;
  }
};

module.exports = findKey;