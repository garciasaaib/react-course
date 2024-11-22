import {
	getUser,
	getUsuarioActivo,
} from "../../../src/01-helloworld/base-pruebas/05-funciones";
describe("05-funciones", () => {
	test("Debe retornar un string", () => {
		// establecemos variables
		const mock = {
			uid: "ABC123",
			username: "El_Papi1502",
		};
		// ejecutamos la funcion
		const user = getUser();

		// de esta manera evaluamos igualdad en objetos
		expect(user).toEqual(mock);
	});


	test("Debe retornar un string", () => {
		// ejecutamos la funcion y guardamos el resultado
		const mock = "Adrian";
		const user = getUsuarioActivo("Adrian");

		// igualdad en strings
		expect(user.username).toBe(mock);
	});
});
