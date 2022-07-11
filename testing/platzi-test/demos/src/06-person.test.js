const Person = require('./06-person');

describe('Test for person', () => {
  // inicializa variable
  let person;

  // cada prueba queremos darle un nuevo valor a person
  beforeEach(() => {
    person = new Person('Adrian', 45, 1.7);
  });

  // esta prueba cambiamos el weight
  test('should return down', () => {
    person.weight = 45;
    expect(person.calcIMC()).toBe('down');
  });

  // esta prueba cambiamos el weight
  test('should return normal', () => {
    person.weight = 59;
    expect(person.calcIMC()).toBe('normal');
  });
});
