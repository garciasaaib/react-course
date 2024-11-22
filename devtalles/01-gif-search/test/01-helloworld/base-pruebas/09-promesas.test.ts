import { getHeroeByIdAsync } from "../../../src/01-helloworld/base-pruebas/09-promesas";
import { heroes } from "../../../src/01-helloworld/base-pruebas/heros";
describe("09-promesas", () => {
	test("getHeroeByIdAsync debe retornar un hero", (done) => {
		const id = 1;
		const mock = heroes.find((h) => h.id === id);
		getHeroeByIdAsync(id)
			.then((hero) => {
				// igualdad en tipos
				expect(hero).toEqual(mock);
				done();
			})
			.catch((error) => {
				expect(error).toEqual("No se pudo encontrar el héroe");
				done();
			});
	});

	test("getHeroeById debe retornar un undefined si no existe", (done) => {
		const id = 1000;
		getHeroeByIdAsync(id)
			.catch((error) => {
				expect(error).toEqual("No se pudo encontrar el héroe");
				done();
			});
	});
});
