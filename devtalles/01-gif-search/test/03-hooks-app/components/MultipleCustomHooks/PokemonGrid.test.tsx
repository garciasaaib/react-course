import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PokemonGrid } from '../../../../src/03-hooks-app/components/MultipleCustomHooks/PokemonGrid';
import { useFetch } from "../../../../src/03-hooks-app/hooks/useFetch";
import { pokemons } from './pokemon.mock';
import { useCounter } from "../../../../src/03-hooks-app/hooks/useCounter";

// mokeamos el useFetch
jest.mock('../../../../src/03-hooks-app/hooks/useFetch');
jest.mock('../../../../src/03-hooks-app/hooks/useCounter');

describe("PokemonGrid component", () => {
  const mockIncrement = jest.fn();
  (useCounter as jest.MockedFunction<typeof useCounter>).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: jest.fn(),
    reset: jest.fn(),
  });


	it("should show component", () => {
    (useFetch as jest.MockedFunction<typeof useFetch>).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
    // solo renderiza el componente
    render(<PokemonGrid />);

    // deben existir todos estos elementos
    expect(screen.getByText("Loading"));
    // getting buttons
    const prevButton: HTMLButtonElement = screen.getByRole("button", { name: /anterior/i });
    const nextButton: HTMLButtonElement = screen.getByRole("button", { name: /siguiente/i });
    const resetButton: HTMLButtonElement = screen.getByRole("button", { name: /reset/i });
    // verify render buttons
    expect(prevButton);
    expect(nextButton);
    expect(resetButton);

    // si no hay data todo debe estar deshabilitado
    expect(prevButton.disabled).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
    expect(resetButton.disabled).toBeFalsy();
  });

  it("should increment be called", async () => {
    (useFetch as jest.MockedFunction<typeof useFetch>).mockReturnValue({
      data: pokemons[0],
      isLoading: false,
      hasError: false,
      error: null,
    });

    // renderiza el componente
    render(<PokemonGrid />);

    // presiona el boton de siguiente
    const nextButton: HTMLButtonElement = screen.getByRole("button", { name: /siguiente/i });
    fireEvent.click(nextButton);

    // debe haber sido llamada
    expect(mockIncrement).toHaveBeenCalled();
  });

});