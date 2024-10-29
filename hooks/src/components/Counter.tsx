import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const incrementar = (num: number) => {
		setCount(count + num);
	}

	return (
		<>
			<h2>UseState counter is {count}</h2>
			<div className="card">
				<button onClick={() => incrementar(1)}>+1</button>
				<button onClick={() => incrementar(2)}>+2</button>
				<button onClick={() => setCount(0)}>0</button>

			</div>


		</>
	);
};
