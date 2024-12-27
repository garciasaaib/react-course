import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoAdd } from "../../../../src/03-hooks-app/components/Reducer/TodoAdd";
import { useForm } from "../../../../src/03-hooks-app/hooks/useForm";
/**
 * verificar que tenga un input y un botón
 * verificar que al cambiar el input su value cambie
 * verificar que onAddTodo sea llamado
 */

// Mock del hook useForm
jest.mock("../../../../src/03-hooks-app/hooks/useForm");

describe("<TodoAdd />", () => {
	// mockeando props
	const mockOnAddTodo = jest.fn(); // Mock para la función onAddTodo
	// mockeando hook
	(useForm as jest.MockedFunction<typeof useForm>).mockReturnValue({
		onInputChange: jest.fn(),
		onResetForm: jest.fn(),
		formState: {
			description: "",
		},
	});

	// esta funcion limpia las funciones
	beforeEach(() => jest.clearAllMocks());

	test("should be components in document", () => {
		// montamos el componente
		render(<TodoAdd onAddTodo={mockOnAddTodo} />);

		// Verificar que el input y el botón están en el DOM
    const input = screen.getByPlaceholderText("Añadir Todo");
    const button = screen.getByRole("button", { name: "Send" });

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
	});


  it("should call onAddTodo with the correct value and reset the form", () => {
    const mockOnInputChange = jest.fn();
    const mockOnResetForm = jest.fn();

    // Mockear el hook con un valor específico
    (useForm as jest.Mock).mockReturnValue({
      description: "Aprender TypeScript",
      onInputChange: mockOnInputChange,
      onResetForm: mockOnResetForm,
    });

    render(<TodoAdd onAddTodo={mockOnAddTodo} />);

    // Simular envío del formulario
    const form = screen.getByLabelText("form") as HTMLFormElement;
    fireEvent.submit(form);

    // // Verificar que onAddTodo fue llamado con el valor correcto
    expect(mockOnAddTodo).toHaveBeenCalledWith("Aprender TypeScript");

    // // Verificar que el formulario fue reseteado
    expect(mockOnResetForm).toHaveBeenCalled();
  });
});
