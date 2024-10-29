import { useState, useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import { doDecrement, doIncrease, doReset } from './actions/actions';


const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
}

export const CounterReducerComponent = () => {
  const [state, dispach] = useReducer(counterReducer, INITIAL_STATE )

  const handleAdd = () => {
    dispach(doIncrease())
  }
  const handleRest = () => {
    dispach(doDecrement())
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
