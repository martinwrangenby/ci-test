function sum(a = 0, b = 0) {
  let result;
  if (typeof a != 'number' || typeof b != 'number') {
    result = NaN;
  } else {
    result = a + b
  }
  return result;
};

module.exports = sum;