import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi'

// sirve para controlar las peticiones http
export default function Todo() {
  const [task, setTask] = React.useState(1)
  const { data: todos, isLoading } = useGetTodosQuery()
  const { data: todo } = useGetTodoQuery(task)
  return (
    <>
      <h1>Todo - RTK query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      <ul>
        {todos?.map((todo) => (
          <li onClick={() => setTask(todo.id)} key={todo.id}><b>{todo.completed ? 'Done' : 'Pending'}</b> {todo.title}</li>
        ))}
      </ul>
      <button>Next Todo</button>
    </>
  )
}
