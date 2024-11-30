export type Todo = {
	id: number;
	description: string;
	done: boolean;
};

export const todoInitialState: Todo[] = [
	{
		id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
	},
  {
		id: new Date().getTime()+100,
    description: "Recolectar la piedra del infinito",
    done: false,
	},
];

type ActionsType =
| { type: 'ADD_TODO'; payload: string }
| { type: 'REMOVE_TODO'; payload: Todo }
| { type: 'ABC' };


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
			if (isRepeated) {
				return initialState;
			}
			// generate the todo
			const newTodo = generateTodo(action.payload);
			return [newTodo, ...initialState];
		}
		case "REMOVE_TODO":
			return initialState.filter((todo) => todo.id !== action.payload.id);
    case "ABC":
      throw new Error("Unhandled action type");
		default:
      return initialState; 
	}
}