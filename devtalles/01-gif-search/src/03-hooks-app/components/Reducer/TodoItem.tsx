import { Todo } from "../../types/Todo";

interface TodoItemProps {
	onDeleteTodo: (id: number) => void;
	onDoneTodo: (id: number) => void;
	todo: Todo;
}
export const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }: TodoItemProps) => {
	const handleDeleteTodo = () => onDeleteTodo(todo.id);

	const handleDoneTodo = () => onDoneTodo(todo.id);

	return (
		<li className="list-group-item flex gap-2 justify-between">
			<span
				onDoubleClick={handleDoneTodo}
				className={todo.done ? "line-through" : ""}
				aria-label="span"
			>
				{todo.description}
			</span>
			<button onClick={handleDeleteTodo} className="btn btn-danger">
				Delete
			</button>
		</li>
	);
};
