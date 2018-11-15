const sum = require('./index');

describe('verify sum()', () => {
  test('summation works correctly', () => {
    expect(sum(1,2)).toBe(3);
  });
  
  test('summation works for negative integers', () => {
    expect(sum(-3, -4)).toBe(-7);
  });
  
  test('incorrect input parameter should return NaN', () => {
    expect(sum('2', '4')).toBe(NaN);
  });
  
  test('missing input parameters defaults to 0', () => {
    expect(sum()).toBe(0);
  });
});