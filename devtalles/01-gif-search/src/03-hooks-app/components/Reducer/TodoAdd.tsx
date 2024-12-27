import { useForm } from "../../hooks/useForm";



export const TodoAdd = ({ onAddTodo }: { onAddTodo: (todoDescription: string) => void }) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ""
  })

  const onNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
		// Elimina espacios
		const todoDescription = description.trim();

		if (!todoDescription) return;
    // sending to restoreTodo
		onAddTodo(todoDescription);
    // Clear all the input fields
    onResetForm()

	};


	return (
		<form aria-label="form" onSubmit={onNewTodo}>
			<input
				name="description"
				className="my-2"
				type="text"
				placeholder="Añadir Todo"
        value={description}
        onChange={onInputChange}
        autoComplete="off"
			/>
			<button type="submit" className="btn">Send</button>
		</form>
	);
};
