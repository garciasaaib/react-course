/**
 * En este import obtenemos a storage
 * en jest.mock('../lib/storage.ts') lo que hacemos es que cuando se importe storage
 * en vez de importar el archivo original, importe el mock
 */
import { storage } from "../lib/storage";
import { saveUsername, getUsername } from "../user";
jest.mock("../lib/storage.ts");

describe("mocks", () => {
  const username = "jonathan daniel";

  test("user mock", () => {
		/* aqui vemos como storage es un mock
  Lo cual se traduce en que storage no es el objeto original
  sino que es un objeto que jest creo para nosotros con los mismos metodos
  pero no llamara a localStorage.

  Internamente, storage y nuestro mock de storage estan conectados
  por lo que si es llamado storage.save, nuestro mock tambien lo sabra
  */
		// console.log('storage', storage)

		// saveUsername es una funcion que al correrla llama a storage.save
		// por lo que el mock deberia saber que fue llamado
		saveUsername(username);
		expect(storage.save).toHaveBeenCalledTimes(1);
		expect(storage.save).toHaveBeenCalledWith({
			key: "username",
			value: username,
		});
	});

test("get username", () => {
  (storage.get as jest.Mock).mockReturnValueOnce(username);

  const result = getUsername();

  expect(result).toBe(username);
  expect(storage.get).toHaveBeenCalledTimes(1);
  expect(storage.get).toHaveBeenCalledWith({ key: "username" });
});
});
