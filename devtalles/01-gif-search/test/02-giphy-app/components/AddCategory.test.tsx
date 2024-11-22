import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../src/02-giphy-app/components/AddCategory";
const newCategory = (data: string) => {
	return data;
};
describe("<AddCategory />", () => {
	test("Debe crear en snapshoot de AddCategory", () => {
		const { container } = render(<AddCategory onNewCategory={newCategory} />);
		// solo crea el snapshot
		expect(container).toMatchSnapshot();
	});

	test("Debe crear un input, poder escribir en el y leer su valor", () => {
		// monta el componente
		render(<AddCategory onNewCategory={newCategory} />);
		// encuentra el input text
		const input: HTMLInputElement = screen.getByRole("textbox");
		// ingresa Saitama en el input
		fireEvent.input(input, { target: { value: "Saitama" } });
		// verifica si el valor de input es Saitama
		expect(input.value).toBe("Saitama");
	});

	test("should call the prop onNewCategory if the input has a value", () => {
		const inputValue = "Saitama";
		// creamos una funcion mock
		const onNewCategory = jest.fn();
		// montar el componente
		render(<AddCategory onNewCategory={onNewCategory} />);
		// para poder obtener el form, necesita agregarse un aria-label='form'
		const form = screen.getByRole("form");
		// obtenemos la referencia del input
		const input: HTMLInputElement = screen.getByRole("textbox");
		// ingresamos inputValue en el input a traves de un evento
		fireEvent.input(input, { target: { value: inputValue } });
		// ejecutar el submit del formulario
		fireEvent.submit(form);
		// despues de hacer submit, se vacia la caja de texto
		expect(input.value).toBe("");
    // evaluamos que onNewCategory fue llamada
    expect(onNewCategory).toHaveBeenCalled()
    // evaluamos que solo sea llamada 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    // evaluamos que haya sido llamada con el valor de la caja de texto
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
	});


  test("should not call onNewCategory if the input is empty", () => {
		const inputValue = "";
		// creamos una funcion mock
		const onNewCategory = jest.fn();
		// montar el componente
		render(<AddCategory onNewCategory={onNewCategory} />);
		// para poder obtener el form, necesita agregarse un aria-label='form'
		const form = screen.getByRole("form");
		// obtenemos la referencia del input
		const input: HTMLInputElement = screen.getByRole("textbox");
		// ingresamos inputValue en el input a traves de un evento
		fireEvent.input(input, { target: { value: inputValue } });
		// ejecutar el submit del formulario
		fireEvent.submit(form);
		// despues de hacer submit, se vacia la caja de texto
		expect(input.value).toBe("");
    // evaluamos que onNewCategory fue llamada
    expect(onNewCategory).not.toHaveBeenCalled()
    // evaluamos que solo sea llamada 1 vez
    expect(onNewCategory).not.toHaveBeenCalledTimes(1)
    // evaluamos que haya sido llamada con el valor de la caja de texto
    expect(onNewCategory).not.toHaveBeenCalledWith(inputValue)
	});
});
