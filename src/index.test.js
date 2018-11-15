const sum = require('./index');

test('summation works correctly', () => {
  expect(sum(1,2)).toBe(3);
});


test('summations works for negative integers', () => {
  expect(sum(-3, -4)).toBe(-7);
});