const sum = require('./index');

test('summation works correctly', () => {
  expect(sum(1,2)).toBe(3);
});

test('summations works for negative integers', () => {
  expect(sum(-3, -4)).toBe(-7);
});

test('Incorrect input parameter should throw an error', () => {
  expect(sum('2', '4')).toBe(NaN);
});

test('missing input parameters defaults to 0', () => {
  expect(sum()).toBe(0);
})