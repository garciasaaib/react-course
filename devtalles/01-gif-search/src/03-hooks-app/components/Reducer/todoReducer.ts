import { Todo } from "../../types/Todo";

type ActionsType =
| { type: 'ADD_TODO'; payload: string }
| { type: 'REMOVE_TODO'; payload: number }
| { type: 'DONE_TODO'; payload: number }
| { type: 'ABC' }
| { type: '' };

const generateTodo = (todoDescription: string) => {
	const todo: Todo = {
		id: new Date().getTime(),
		description: todoDescription,
		done: false,
	};
	return todo
}

export const todoReducer = (initialState: Todo[], action: ActionsType) => {
  switch (action.type) {
		case "ADD_TODO":{
			// check todo is not repeated
			const isRepeated = initialState.some(
				(todo) => todo.description === action.payload
			);
			// no repetir todo
			if (isRepeated) return initialState;
			// generate the todo
			const newTodo = generateTodo(action.payload);
			return [newTodo, ...initialState];
		}
		case "DONE_TODO":
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {...todo, done: !todo.done};
				}
				return todo;
			});
		case "REMOVE_TODO":
			return initialState.filter((todo) => todo.id !== action.payload);
    case "ABC":
      throw new Error("Unhandled action type");
		default:
      return initialState;
	}
}