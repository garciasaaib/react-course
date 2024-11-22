import { useState } from "react"

export const UseState = () => {
  const [ counter, setCounter ] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })
  return (
    <div>
      <h1>Counter1: {counter.counter1}</h1>
      <h1>Counter2: {counter.counter2}</h1>
      <h1>Counter3: {counter.counter3}</h1>
      <hr />
      <button className="btn" onClick={() => setCounter({...counter, counter1: counter.counter1+1})}>+1</button>
    </div>
  )
}
