describe('conjunto de pruebas', () => {
  // levanta una base de datos antes de hacer esta prueba
  // el scope del before all es como el de javascript
  beforeAll(() => {
    console.log('before all');
  });

  // ya terminaron todos los casos de prueba, rompe la base de datos
  afterAll(() => {
    console.log('after all');
  });

  test('case 1', () => {
    expect(true).toBe(true);
  });
  test('case 2', () => {
    expect(true).toBe(true);
  });
  test('case 3', () => {
    expect(true).toBe(true);
  });

  describe('conjunto de pruebas', () => {
    // antes de cada prueba en este scope, has esto
    beforeEach(() => {
      console.log('before each one');
    });

    // despues de correr cada prueba individualmente, borra esto
    afterEach(() => {
      console.log('after each one');
    });

    test('case 1', () => {
      expect(true).toBe(true);
      console.log('case 1');
    });
    test('case 2', () => {
      expect(true).toBe(true);
    });
    test('case 3', () => {
      expect(true).toBe(true);
    });
  });
});
