import React from "react";
import { render, screen } from "@testing-library/react";
import { HelloWorld } from "../../src/01-helloworld/HelloWorld";

describe("<HelloWorld />", () => {
	// inicializacion de variables
	const title = "holoroco";

	test("Debe hacer match con el snapshoot", () => {
		const { container } = render(<HelloWorld title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("Debe mostrar el mensaje con title", () => {
		render(<HelloWorld title={title} />);

		// nos hace una copia simplificada del dom para poder hacer pruebas
		// screen.debug();

		expect(screen.getByText(title)).toBeInTheDocument();
	});

	test("Debe mostrar el mensaje con title en un h1", () => {
		render(<HelloWorld title={title} />);
		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);

	});

});
