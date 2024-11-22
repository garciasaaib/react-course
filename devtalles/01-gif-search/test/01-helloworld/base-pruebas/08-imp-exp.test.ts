import { getHeroeById, getHeroesByOwner } from "../../../src/01-helloworld/base-pruebas/08-imp-exp";
import { heroes } from "../../../src/01-helloworld/base-pruebas/heros";
describe("08-imp-exp", () => {
	test("getHeroeById debe retornar un hero", () => {
		const id = 1;
    const mock = heroes.find((h) => h.id === id);
		const result = getHeroeById(id);

		// igualdad en tipos
		expect(result).toEqual(mock)
	});

  test("getHeroeById debe retornar un undefined si no existe", () => {
		const id = 1000;
		const result = getHeroeById(id);

		// cuando no encuentra nada
		expect(result).toBeFalsy();
	});

  test("getHeroeByOwner debe retornar 3 heros", () => {
		const owner = "DC";
    const mock = heroes.filter((h) => h.owner === owner);
		const result = getHeroesByOwner(owner);

		// igualdad en tipos
		expect(result).toEqual(mock)
    expect(result.length).toBe(3);
	});
});
