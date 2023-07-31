const middle = function(arr) {
  //helper function to determine if an array has even numbers of elements
  const arrayIsEven = function(arr) {
    return arr.length % 2 === 0;
  };

  let output = [];

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length > 2) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    if (arrayIsEven(arr)) {
      while (startIndex + 1 !== endIndex) {
        startIndex++;
        endIndex--;
      }
      output.push(arr[startIndex]);
      output.push(arr[endIndex]);
    } else {
      while (startIndex !== endIndex) {
        startIndex++;
        endIndex--;
      }
      output.push(arr[startIndex]);
    }
  } else {
    output = [];
  }
  return output;
};

module.exports = middle;