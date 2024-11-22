import { retornaArreglo } from '../../../src/01-helloworld/base-pruebas/07-deses-arr';
describe("07-deses-arr", () => {
	test("Debe retornar un string y un numero", () => {

    const [letters, numbers] = retornaArreglo();

    // igualdad en tipos
		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');
	});

});

