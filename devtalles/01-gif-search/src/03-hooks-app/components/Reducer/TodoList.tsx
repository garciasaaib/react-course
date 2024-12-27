import { Todo } from "../../types/Todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	onDeleteTodo: (id: number) => void;
	onDoneTodo: (id: number) => void;
}
export const TodoList = ({
	todos,
	onDeleteTodo,
	onDoneTodo,
}: TodoListProps) => {
	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDeleteTodo={onDeleteTodo}
					onDoneTodo={onDoneTodo}
				/>
			))}
		</ul>
	);
};
