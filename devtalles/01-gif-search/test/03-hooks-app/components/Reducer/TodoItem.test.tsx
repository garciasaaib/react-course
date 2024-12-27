import React from 'react'
import { Todo } from "../../../../src/03-hooks-app/types/Todo";
import { TodoItem } from "../../../../src/03-hooks-app/components/Reducer/TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";
/** testear
 * recibir props en tipo y forma
 * evaluar el tachado en el elemento en todo.done
 * evaluar el evento onDobleclick y evaluar el tachado y el done
 * evaluar el delete y evaluar el evento onClick
 */
describe("<TodoItem />", () => {
	const todo: Todo[] = [
		{
			id: 1,
			description: "Learn React",
			done: false,
		},
		{
			id: 2,
			description: "Learn TypeScript",
			done: true,
		},
	];

	// mockeamos las funciones necesarias para mandar al TodoItem
	const onDeleteTodoMock = jest.fn();
	const onDoneTodoMock = jest.fn();

	// esta funcion limpia las funciones
	beforeEach(() => jest.clearAllMocks());

	test("should show an item with done as false", () => {
		// montamos el componente
		render(
			<TodoItem
				onDeleteTodo={onDeleteTodoMock}
				onDoneTodo={onDoneTodoMock}
				todo={todo[0]}
			/>
		);

		// obtenemos el elemento <li></li>
		const liElement = screen.getByRole("listitem");
		// vemos si li tiene esta clase
		expect(liElement.className).toContain("list-group-item");

		// toma el span
		const spanElement = screen.getByLabelText("span");
		// vemos si span tiene esta clase
    expect(spanElement.className).not.toContain("line-through");
	});

  test("should show an item with done as true", () => {
		// montamos el componente
		render(
			<TodoItem
				onDeleteTodo={onDeleteTodoMock}
				onDoneTodo={onDoneTodoMock}
				todo={todo[1]}
			/>
		);
		// toma el span
		const spanElement = screen.getByLabelText("span");
		// vemos si span tiene esta clase
    expect(spanElement.className).toContain("line-through");
	});


  test("should onDeleteTodo have been called", () => {
		// montamos el componente
		render(
			<TodoItem
				onDeleteTodo={onDeleteTodoMock}
				onDoneTodo={onDoneTodoMock}
				todo={todo[0]}
			/>
		);

    // get delete btn
    const deleteBtn = screen.getAllByRole("button")[0];
    // click on it
    fireEvent.click(deleteBtn);
    // check if onDeleteTodo have been called
    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo[0].id);
	});


  test("should onDoneTodo have been called", () => {
		// montamos el componente
		render(
			<TodoItem
				onDeleteTodo={onDeleteTodoMock}
				onDoneTodo={onDoneTodoMock}
				todo={todo[0]}
			/>
		);

    // get delete btn
    const spanElement = screen.getByLabelText("span");
    // click on it
    fireEvent.doubleClick(spanElement);
    // check if onDeleteTodo have been called
    expect(onDoneTodoMock).toHaveBeenCalled();
    expect(onDoneTodoMock).toHaveBeenCalledWith(todo[0].id);
	});
});
