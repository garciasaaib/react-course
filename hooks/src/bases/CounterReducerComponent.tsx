import { useState, useReducer } from 'react';
type CounterState = {
  counter: number;
  previus: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
}

type ActionState =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

const counterReducer = (state: CounterState, action: ActionState): CounterState => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
        previus: state.counter,
        changes: state.changes + 1,
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
        previus: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return INITIAL_STATE
    default:
      return state
  }
  

}

export const CounterReducerComponent = () => {
  const [state, dispach] = useReducer(counterReducer, INITIAL_STATE )

  const handleAdd = () => {
    dispach({ type: 'increment' })
  }
  const handleRest = () => {
    dispach({ type: 'decrement' })
  }

  return (
      <>
          <h3>Counter: { state.counter }</h3>
          <h3>Previus: { state.previus }</h3>
          <h3>Changes: { state.changes }</h3>

          <button onClick={handleAdd}>+1</button>
          <button onClick={handleRest}>-1</button>
      </>
  )
}
