import { useState } from "react";

export const Counter = ({initialValue = 0}) => {
  const [counter, setCounter] = useState(initialValue);
  const handleAdd = () => {
    setCounter((currValue) => currValue+1);
  }
  const handleSubstract = () => {
    setCounter((currValue) => currValue-1);
  }
  const handleReset = () => {
    setCounter(0);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>Substract</button>

    </div>
  )
}
