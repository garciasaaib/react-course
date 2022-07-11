const math = require('./02-math');

describe('conjunto de pruebas para la libreria math', () => {
  test('adds 1 + 2 to equal 3', () => {
    const result = math.sum(1, 2);
    expect(result).toBe(3);
  });

  test('2 * 3 to equal 6', () => {
    const result = math.multiply(2, 3);
    expect(result).toBe(6);
  });

  test('12 - 3 to equal 9', () => {
    const result = math.rest(12, 3);
    expect(result).toBe(9);
  });

  test('12 / 3 to equal 4', () => {
    const result = math.divide(12, 3);
    expect(result).toBe(4);
    const resultnull = math.divide(12, 0);
    expect(resultnull).toBeNull();
  });
});
