import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../../src/03-hooks-app/hooks/useFetch";

describe("Pruebas de hooks useFetchGifs", () => {
	test("should return initial state", () => {
		const url = "https://pokeapi.co/api/v2/pokemon/1";

		// renderHook sirve para inicializar hooks fuera de react
		const { result } = renderHook(() => useFetch(url));

    const {data, error, hasError, isLoading} = result.current; 
	
    // evaluating default initial values
    expect(data).toEqual(null);
    expect(error).toEqual(null);
    expect(hasError).toBeFalsy();
    expect(isLoading).toBeTruthy();
	});

  test("should return an success response", async () => {
		const url = "https://pokeapi.co/api/v2/pokemon/1";

		// renderHook sirve para inicializar hooks fuera de react
		const { result } = renderHook(() => useFetch(url));

		// run and wait till isLoading is false
		await waitFor(() => expect(result.current.isLoading).toBeFalsy(), {
			timeout: 1000,
		});

		expect(result.current.data).toEqual(expect.any(Object));
		expect(result.current.error).toEqual(null);
		expect(result.current.hasError).toBeFalsy();
		expect(result.current.isLoading).toBeFalsy();
	});
});

