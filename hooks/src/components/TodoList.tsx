import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoList = () => {
  const {todoState} = useContext(TodoContext)
  return (
    <ul>
      {todoState.todos.map(todo => (
        <li key={todo.id}>{todo.desc}</li>
      ))}
    </ul>
  )
}
