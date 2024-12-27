import React from "react";
import { Todo } from "../../../../src/03-hooks-app/types/Todo";
import { render, screen } from "@testing-library/react";
import { TodoApp } from '../../../../src/03-hooks-app/components/Reducer/TodoApp';
import { useTodo } from "../../../../src/03-hooks-app/hooks/useTodo";

// moqueando un hook
jest.mock('../../../../src/03-hooks-app/hooks/useTodo');

const todos: Todo[] = [
  {
    id: 1,
    description: "Learn React",
    done: false,
  },
  {
    id: 2,
    description: "Learn TypeScript",
    done: false,
  },
  {
    id: 3,
    description: "Learn Python",
    done: false,
  },
];

describe("<TodoApp />", () => {
  // dando valores por defecto a un hook mockeado
  // este estado es el que tu quieres que tenga
  (useTodo as jest.MockedFunction<typeof useTodo>).mockReturnValue({
		todos,
		todosCount: todos.length,
    todosDone: todos.filter(({done}) => done).length,
		onAddTodo: jest.fn(),
		onDeleteTodo: jest.fn(),
		onDoneTodo: jest.fn(),
	});


	// esta funcion limpia las funciones
	beforeEach(() => jest.clearAllMocks());

	test("should be showed the headings", () => {
		// montamos el componente
		render(
			<TodoApp />
		);

    // heading of the list
    expect(screen.getByRole("heading", { name: /todo app/i }));
		// heading of the form
    expect(screen.getByRole("heading", { name: /agregar todo/i }));

	});
});
