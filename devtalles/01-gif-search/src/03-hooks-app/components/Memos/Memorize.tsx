import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

// Este componente se redibuja cada vez que el state cambia
export const Memorize = () => {
	const { counter, increment } = useCounter();
	const [show, setShow] = useState(true);
	return (
		<>
			<h1>
				Counter: <Small value={counter} />
			</h1>
			<hr />
			<button className="btn" onClick={increment}>
				+1
			</button>

      {/* Cambios en el state show afectan a todo el componente y sus hijos,
      por lo tanto se vuelven a dibujar */}
      <button onClick={() => setShow(!show)}>Show/Hide: {JSON.stringify(show)}</button>
		</>
	);
};




import { memo } from "react"

/** memo
 * es una funcion que le dice a react que este componente debe ser memorizado
 * Para esto, se debe ejecutar la funcion mandando el componente como propiedad
 *
 * al poner memo en esta funcion, esta no cambiara con los cambios del state del padre,
 * solo cambiara con los cambios en sus propiedades.
 */
const Small = memo(({value}: {value: number}) => {
  console.log('Me volvi a dibujar D:')
  return (
    <small>{value}</small>
  )
})