import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/02-giphy-app/hooks/useFetchGifs";
// https://react-hooks-testing-library.com/

/**
 * En los hooks, solo evaluamos elementos de entrada y salida
 */
describe("Pruebas de hooks useFetchGifs", () => {
	test("should return initial state", () => {
		const category = "One Punch";

		// renderHook sirve para inicializar hooks fuera de react
		const { result } = renderHook(() => useFetchGifs(category));
		// desestructuramos el resultado
		const { gifs, loading } = result.current;
		// evaluamos los initial values
		expect(gifs.length).toBe(0);
		expect(loading).toBe(true);
	});

	test("should return an array and loading false", async () => {
		const category = "One Punch";
		// renderHook sirve para inicializar hooks fuera de react
		const { result } = renderHook(() => useFetchGifs(category));

		// espera un segundo a que ejecute la peticion
		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0), {
			timeout: 1000,
		});
    // desestructuramos el resultado despues de la peticion
		const { gifs, loading } = result.current;
		// evaluamos los valores despues de la peticion
    expect(gifs.length).toBeGreaterThan(0);
		expect(loading).toBeFalsy();
	});
});
