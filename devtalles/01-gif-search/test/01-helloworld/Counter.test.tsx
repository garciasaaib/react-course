import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../../src/01-helloworld/Counter";

describe('<Counter />', () => {
  test('Debe mostrar <Counter /> correctamente', () => {
		const { container } = render(<Counter />);
		expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defecto de 100', () => {
    render(<Counter initialValue={100} />);
    // obteneos los tag h2, y evaluamos su valor
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
  });


  test('Debe 101 despues del click en Add', () => {
    const initialValue = 100;
    render(<Counter initialValue={initialValue} />);
    // obtenemos el elemento button con el valor Add, y le hacemos un click
    fireEvent.click(screen.getByRole('button', {name: 'Add'}));
    // obtenemos el h2 y evaluamos su contenido
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('101');
  });

  test('Debe 99 despues del click en Add', () => {
    const initialValue = 100;
    render(<Counter initialValue={initialValue} />);
    // obtenemos el boton con el texto Add, y hacemos click
    fireEvent.click(screen.getByRole('button', {name: 'Add'}));
    // evaluamos el contenido del h2
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('101');
  });
});