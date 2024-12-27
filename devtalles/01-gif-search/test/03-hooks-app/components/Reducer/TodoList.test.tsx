import React from "react";
import { Todo } from "../../../../src/03-hooks-app/types/Todo";
import { render, screen } from "@testing-library/react";
import { TodoList } from "../../../../src/03-hooks-app/components/Reducer/TodoList";
/** testear
 * que la lista de todos sea renderizada
 */
describe("<TodoList />", () => {
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

	// mockeamos las funciones necesarias para mandar al TodoItem
	const onDeleteTodoMock = jest.fn();
	const onDoneTodoMock = jest.fn();

	// esta funcion limpia las funciones
	beforeEach(() => jest.clearAllMocks());

	test("should items be listed in doc", () => {
		// montamos el componente
		render(
			<TodoList
				todos={todos}
				onDoneTodo={onDoneTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		//obtener el elemento de lista contenedor
    expect(screen.getByText("Learn TypeScript"));
    expect(screen.getByText("Learn React"));
    expect(screen.getByText("Learn Python"));
	});
});
