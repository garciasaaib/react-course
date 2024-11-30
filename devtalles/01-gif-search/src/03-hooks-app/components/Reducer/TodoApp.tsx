import { useReducer } from "react";
import { Todo, todoInitialState, todoReducer } from "./todoReducer";

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, todoInitialState);

  const onAddTodo = (todoDescription: string)  => {
    dispatch({ type: "ADD_TODO", payload: todoDescription });
  }
	return (
		<>
			<div className="mb-4">
				<h1 className="card-header">TodoApp</h1>
				<hr />
				<TodoList todos={todos} />
			</div>
			<div>
				<h1>Agregar Todo</h1>
				<hr />
        <TodoAdd onAddTodo={onAddTodo} />
			</div>
		</>
	);
};

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<li key={todo.id} className="list-group-item">
					<span>{todo.description}</span>
					<button className="btn btn-danger">Delete</button>
				</li>
			))}
		</ul>
	);
};

const TodoAdd = ({ onAddTodo }: { onAddTodo: (todoDescription: string) => void }) => {
	const onNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Evita que el formulario se envíe por defecto
		// obtiene un objeto form
		const form = new FormData(event.currentTarget);
		// Elimina espacios
		const todoDescription = (form.get("todo") as string).replace(/\s/g, "");

		if (!todoDescription) return;
    // sending to restoreTodo
		onAddTodo(todoDescription);
    // Clear all the input fields
    event.currentTarget.reset()

	};

	return (
		<form onSubmit={onNewTodo}>
			<input
				name="todo"
				className="my-2"
				type="text"
				placeholder="Añadir Todo"
			/>
			<button className="btn">Send</button>
		</form>
	);
};
