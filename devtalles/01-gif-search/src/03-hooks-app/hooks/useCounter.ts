import { useState } from "react"

export const useCounter = (initialValue=10) => {
  const [state, setState] = useState(initialValue)

  const increment = () => setState(curr => curr+1)
  const decrement = () => setState(curr => curr-1)
  const reset = () => setState(initialValue)
  return {
    counter: state,
    increment,
    decrement,
    reset,
  }
}
