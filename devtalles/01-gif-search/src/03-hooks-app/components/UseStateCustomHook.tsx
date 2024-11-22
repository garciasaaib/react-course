import { useCounter } from "../hooks/useCounter";

const INITIAL_VALUE = 11
export const UseStateCustomHook = () => {
	const { counter, decrement, increment, reset } = useCounter(INITIAL_VALUE);
	return (
		<div>
			<h1>Counter with Hook: {counter}</h1>
			<hr />
			<button className="btn" onClick={increment}>
				+1
			</button>
      <button className="btn" onClick={decrement}>
				-1
			</button>
      <button className="btn" onClick={reset}>
				reset
			</button>
		</div>
	);
};
