// matchers or assetions
test('testobj', () => {
  const data = {
    name: 'Adrian',
  };
  data.lastname = 'Garcia';
  expect(data).toEqual({ name: 'Adrian', lastname: 'Garcia' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  // expect(data).toBeUndefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(false).toEqual(false);
  expect(true).toEqual(true);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(undefined).toBeFalsy();
});

test('strings', () => {
  const data = 'string';
  expect(data).toMatch(/str/);
});

test('arrays / lists', () => {
  const data = [1, 2, 3, 4, 5, 6];
  expect(data).toContain(5);
});
