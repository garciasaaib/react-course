import { memo, useCallback, useState } from "react";

export const UseCallback = () => {
  const [counter, setCounter] = useState(2)

  // useCallback sirve para memorisar setters y funciones, de manera que estos no cambien de espacio en memoria
  // y por lo tanto al acualizarse el estado del padre, el componente hijo con props de funciones setters no se re renderiza
  // puesto que esta funcion sigue siendo la misma en contenido y posicion en memoria
  const increment = useCallback(
    (v: number) => {
      setCounter((val) => val + v)
    }, []
  )
  
  // const increment = () => {
  //   setCounter(counter + 1)
  // }
	return (
		<>
			<h1>
				UseCallback Hook: <small>{counter}</small>
			</h1>
			<hr />
			<ShowIncrement increment={increment} />

		</>
	);
};


// memo por si solo funciona con props como variables de estado
// pero para manejar funciones, es necesario usar useCallback para inicializarlas
// para que useCallback funcione es necesario meterlo con memo
const ShowIncrement = memo(({increment}: {increment: (v:number) => void}) => {
  // cuando no usamos useCallback, el state del padre nos mandara a rerenderizar a los hijos, aunque no hayan cambiado
  // puesto que cada que el state del padre cambia, su hijo cambia y es necesario volverloa dibujar
  // esto genera tambien que el parametro mandado como funcion sea uno diferente al llamado por primera vez
  console.log('Me volvi a generar D:')
  return (
    <button
      className="btn"
      onClick={() => {increment(1)}}
    >
      Incrementar
    </button>
  )
})