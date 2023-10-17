import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";
import { expect, test } from "vitest";

// render dibuja dentro de screen cualquier componente
// screen es un fake html creado para probar componentes
test("HelloWorld mounts properly", () => {
	render(<HelloWorld />);
	// screen.debug(); // all the fake html
  const title = screen.getByText(/HelloWorld/i);
  // screen.debug(title); // the html for that query
  expect(title).toBeInTheDocument();
});
