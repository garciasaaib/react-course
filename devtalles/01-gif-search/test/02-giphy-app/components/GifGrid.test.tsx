import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../../src/02-giphy-app/components/GifGrid";
import { useFetchGifs } from "../../../src/02-giphy-app/hooks/useFetchGifs";
import { Gif } from "../../../src/02-giphy-app/helpers/getGifs";

const category = "Saitama";
// con esto, mockeamos useFetchGifs
jest.mock("../../../src/02-giphy-app/hooks/useFetchGifs");

// le decimos que el hook useFetchGifs es una funcion mockeada tipo useFetchGifs
// y que su valor de retorno por defecto es el designado
(useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
	gifs: [],
	loading: true,
});

describe("<GifGrid />", () => {
	test("Debe crear el loading", () => {
		render(<GifGrid category={category} />);
		// evaluamos que diga cargando
		expect(screen.getByText("Cargando..."));
		// evaluar que diga la categoria en algun lado
		expect(screen.getByText("Cargando..."));
	});

	test("Debe mostrar un listado de items", () => {
		render(<GifGrid category={category} />);
		// evaluamos que diga cargando
		expect(screen.getByText("Cargando..."));
		// evaluar que diga la categoria en algun lado
		expect(screen.getByText("Cargando..."));
	});

	test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
		// creamos el mock de la lista de gifs
		const gifs: Gif[] = [
			{
				id: "1",
				title: "Saitama",
				url: "http://localhost/saitama.jpg",
			},
			{
				id: "2",
				title: "goku",
				url: "http://localhost/goku.jpg",
			},
		];

    // insertamos los gifs en el mock para esta prueba
    (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
      gifs,
      loading: false,
    });
		// renderizamos el componente
		render(<GifGrid category={category} />);
    // evalua si el conteo de imagenes en el grid son dos
    expect(screen.getAllByRole('img').length).toBe(2)
	});
});
