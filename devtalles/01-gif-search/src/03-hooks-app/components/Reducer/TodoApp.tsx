import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../../hooks/useTodo";

export const TodoApp = () => {

  const { onAddTodo, onDeleteTodo, onDoneTodo, todos, todosCount, todosDone} = useTodo()

	return (
		<>
			<div className="mb-4">
				<h1 className="card-header">TodoApps </h1>
        <h2>Total: {todosCount}, Done: {todosDone}</h2>
				<hr />
				<TodoList todos={todos} onDeleteTodo={onDeleteTodo} onDoneTodo={onDoneTodo} />
			</div>
			<div>
				<h1>Agregar Todo</h1>
				<hr />
        <TodoAdd onAddTodo={onAddTodo} />
			</div>
		</>
	);
};



