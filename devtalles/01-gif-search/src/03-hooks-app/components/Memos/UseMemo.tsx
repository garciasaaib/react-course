import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";

const heavyStuff = (iterationNumber=100) => {
	for( let i = 0; i< iterationNumber; i++){
		console.log('iteraciones')
	}
	return `Iteracion, realizada ${iterationNumber} veces`;
}

// 
export const UseMemo = () => {
	const { counter, increment } = useCounter(4000);
	const [show, setShow] = useState(true);

	// use memo se parece en estructura al useEffect
	// pero en realidad tiene mas sentido que retorna  un valor memorizado

	// en este ejemplo mandamos heavyStuff, y el valor memorizado sera su retorno
	// el segundo argumento sera el disparador para que se vuelva a ejecutar
	// de esta manera solo se ejecutara cuando ese argumento cambie,
	// cualquier otro movimiento en la interfaz, usara el valor guardado
	const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr />
			<h4>{memorizedValue}</h4>
			<button className="btn" onClick={increment}>
				+1
			</button>

      <button onClick={() => setShow(!show)}>Show/Hide: {JSON.stringify(show)}</button>
		</>
	);
};
