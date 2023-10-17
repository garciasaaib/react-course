import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <p>Current clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
