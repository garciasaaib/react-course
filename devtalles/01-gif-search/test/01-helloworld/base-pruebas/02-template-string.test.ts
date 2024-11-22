import { getSaludo } from "../../../src/01-helloworld/base-pruebas/02-template-string";

describe("template-string", () => {
	test('getSaludo debe retornar "Hola Fernando"', () => {
		// ejecutamos la funcion saludo y cuadramos su respuesta
		const result = getSaludo("Fernando");
        // vemos si el resultado es igual a lo que esperamos que sea
		expect(result).toBe("Hola Fernando");
	});
});
