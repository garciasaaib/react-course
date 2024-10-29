import { useReducer } from "react";
// inicia estructura reducer
const initialState = { contador: 0 };
type ActionType =
	| { type: "incrementar" }
	| { type: "decrementar" }
	| { type: "reset" }
	| { type: "custom", payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case "incrementar":
			return {
				contador: state.contador + 1,
			};
		case "decrementar":
			return {
				contador: state.contador - 1,
			};
		case "reset":
			return initialState;
    case "custom":
      return {contador: state.contador + action.payload};
		default:
			return state;
	}
};
// termina estructura reducer


export const CounterReducer = () => {
  const [state, dispatch] = useReducer(contadorReducer, initialState);
	return (
		<div>
			<h2>Contador: {state.contador}</h2>
      <button onClick={() => {dispatch({type: 'incrementar'})}}>
        Incrementar
      </button>
      <button onClick={() => {dispatch({type: 'decrementar'})}}>
        Decrementar
      </button>
      <button onClick={() => {dispatch({type: 'reset'})}}>
        Reset
      </button>
      <button onClick={() => {dispatch({type: 'custom', payload: 100})}}>
        Custom
      </button>
		</div>
	);
};
