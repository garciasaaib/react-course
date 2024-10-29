import { Todo, TodoState } from "../interfaces/todos";

type TodoActions =
  | { type: "add"; payload: Todo }
  | { type: "toggle"; payload: number }


export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      };
    case 'toggle':
      return {
        ...state
      };
    default:
      return state
  }
}