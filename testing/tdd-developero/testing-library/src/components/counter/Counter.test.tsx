import { expect, test } from "vitest";
import { Counter } from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";

// test para el estado inicial
test("Display counts 0 clicks at start", () => {
	render(<Counter />);
	const result = screen.getByText(/Current clicks: 0/i);
	expect(result).toBeInTheDocument();
});

test("Display counts 1 click after 1 click", () => {
  render(<Counter />);
  // pedimos encontrar el tag con texto Increment
  // pero solo los elementos button
  const button = screen.getByText(/Increment/i, { selector: 'button' });

  // ejecutamos el evento click en ese elemento
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // encontramos el elemento con el siguiente texto, y testeamos que exista
  const result = screen.getByText(/Current clicks: 4/i);
	expect(result).toBeInTheDocument();
});
