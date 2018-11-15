const sum = require('./index');

test('summation works correctly', () => {
  expect(sum(1,2)).toBe(3);
});
