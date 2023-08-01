const findKey = (data, callback) => {
  for(const key in data) {
    if (callback(data[key])) return key;
  }
};

module.exports = findKey;