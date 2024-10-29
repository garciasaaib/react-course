export type ActionState =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }



// action creation functions base
// export const doReset = ():ActionState => {
//   return { type: 'reset' }
// }

// action creator shortcut
export const doReset = ():ActionState => ({ type: 'reset' })
export const doIncrease = ():ActionState => ({ type: 'increment' })
export const doDecrement = ():ActionState => ({ type: 'decrement' })