// a veces necesitamos inicializar taras antes de probarlas
// por ejemplo, una conexion a una base de datos
describe("setup and teardown examples", () => {
	beforeAll(() => {
		console.log("beforeAll: Se ejecuta antes de correr todos los tests");
	});

	beforeEach(() => {
		console.log("beforeEach: Se ejecuta antes de cada uno de los tests");
	});

  afterAll(() => {
    console.log("afterAll: Se ejecuta despues de correr todos los tests");
  });

  afterEach(() => {
    console.log("afterEach: Se ejecuta despues de cada uno de los tests");
  });
	test("before and after 1", () => {
		expect(1 + 1).toBe(2);
	});
  test("before and after 2", () => {
		expect(1 + 1).toBe(2);
	});
});
