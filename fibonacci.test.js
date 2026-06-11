const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  test('returns empty array for n = 0', () => {
    expect(fibonacci(0)).toEqual([]);
  });

  test('returns [0] for n = 1', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test('returns [0, 1] for n = 2', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  test('returns correct sequence for n = 7', () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  test('returns correct sequence for n = 10', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test('throws for negative input', () => {
    expect(() => fibonacci(-1)).toThrow();
  });
});
