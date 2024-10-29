export type Todo = {
  id: number
  desc: string
  completed: boolean
}

export type TodoState = {
  todoCount: number
  todos: Todo[]
  completed: number
  pending: number
}