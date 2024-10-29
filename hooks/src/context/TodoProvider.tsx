import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/todos";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: 1,
			desc: "Learn React",
			completed: false,
		},
		{
			id: 2,
			desc: "Learn Angular",
			completed: false,
		},
	],
	completed: 0,
	pending: 2,
};

type TodoProviderProps = {
	// children: React.ReactNode
	// children: JSX.Element | JSX.Element[]
	children: React.ReactNode;
};
export const TodoProvider = ({ children }: TodoProviderProps) => {
	const [todoState, dispatch] = React.useReducer(todoReducer, INITIAL_STATE);

	return (
		<TodoContext.Provider
			value={{
				todoState,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
