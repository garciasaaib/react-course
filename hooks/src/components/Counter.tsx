import React from "react";
import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h2>UseState counter is {count}</h2>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>+</button>
				<button onClick={() => setCount((count) => count + -1)}>-</button>
			</div>
			<hr />
		</>
	);
};
