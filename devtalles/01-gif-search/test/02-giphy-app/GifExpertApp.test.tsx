import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/02-giphy-app/GifExpertApp";

describe("<GifExpertApp />", () => {
	test("Debe existir el titulo GifExpertApp ", () => {
		const title = "GifExpertApp";
		render(<GifExpertApp />);

		// Verificar el título
		expect(screen.getByText(title)).toBeTruthy();

		// Verificar que la categoría inicial está en el documento
		expect(screen.getByText("One Punch")).toBeTruthy();
	});
	test('no debe agregar una categoría repetida', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    // Intentar agregar una categoría ya existente
    fireEvent.input(input, { target: { value: 'One Punch' } })
    fireEvent.submit(form)

    // Verificar que sigue habiendo solo una categoría "One Punch"
    const categories = screen.getAllByText('One Punch')
    expect(categories.length).toBe(1)
  })
	test('debe agregar una nueva categoría si no existe', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox') // Asumiendo que AddCategory usa un input de tipo texto
    const form = screen.getByRole('form') // Asumiendo que AddCategory tiene role="form"

    // Agregar una nueva categoría
    fireEvent.input(input, { target: { value: 'Dragon Ball' } })
    fireEvent.submit(form)

    // Verificar que la nueva categoría aparece
    expect(screen.getByText('Dragon Ball')).toBeTruthy()
  })
});
