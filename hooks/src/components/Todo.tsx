import { TodoProvider } from "../context/TodoProvider"
import { TodoList } from "./TodoList"

export const Todo = () => {
  return (
    <TodoProvider>
      <h2>Todo</h2>
      <TodoList />

    </TodoProvider>
  )
}
