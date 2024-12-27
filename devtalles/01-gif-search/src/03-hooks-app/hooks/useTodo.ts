import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/Reducer/todoReducer";
import { Todo } from "../types/Todo";

/*
Esta funcion se manda como un tercer parametro a useReducer
Para inicializar el estado del reducer.
En es
*/
const init = () => {
  const storedTodo = localStorage.getItem('todos')
  return storedTodo ? JSON.parse(storedTodo) : []
}


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

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, todoInitialState, init);

  const onAddTodo = (todoDescription: string)  => {
    dispatch({ type: "ADD_TODO", payload: todoDescription });
  }
  const onDeleteTodo = (todoId: number) => {
    dispatch({ type: "REMOVE_TODO", payload: todoId });
  }
  const onDoneTodo = (todoId: number) => {
    dispatch({ type: "DONE_TODO", payload: todoId });
  }

  // guarda los todos en localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return {
		todos,
		onAddTodo,
		onDeleteTodo,
		onDoneTodo,
		todosCount: todos.length,
		todosDone: todos.filter((todo) => !todo.done).length,
	};
}
