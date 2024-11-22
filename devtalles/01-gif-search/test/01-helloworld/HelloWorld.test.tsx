import React from "react";
import { render } from "@testing-library/react";
import { Title, HelloWorld } from "../../src/01-helloworld/HelloWorld";

describe("Esta es una prueba que no puede fallar", () => {
	test("Esta es una prueba que no puede fallar", () => {
		const { getAllByText } = render(<Title title="holoroco" />);
		expect(getAllByText("holoroco"));
	});

	test("Esta es una prueba que no puede fallar", () => {
		const component = render(<HelloWorld />);
		expect(component.container).toMatchSnapshot();
	});

	// varias maneras de probar un texto
	test("Debe tener un h1 con title", () => {
		const title = "holamundoo";
		const { container, getAllByText, getByTestId } = render(<HelloWorld title={title}/>);

		// 	checando que exista el texto
		expect(getAllByText(title)).toBeTruthy();

		// para probar contenido del texto
		const h1 = container.querySelector("h1");
		expect(h1?.innerHTML).toContain(title);

		// obtener el componente por test-id y probar texto
		// toContain es case sensitive y quita espacios
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

});
