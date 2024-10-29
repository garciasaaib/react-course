import { ActionState } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"

export const counterReducer = (state: CounterState, action: ActionState): CounterState => {
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
    default:
      return state
  }
}