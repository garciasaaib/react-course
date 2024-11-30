
// useLayoutEffect es un useEffect que se dispara despues de que el componente es montado
// y despues de los useEffect

// import { useLayoutEffect } from "react"
import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { BreakingBadAPIResponse } from "../types/Breakingbadapi";

// es usado para enfocar los cambios en algun componente
export const UseLayoutEffect = () => {
	const { counter, decrement, increment, reset } = useCounter(1);
	const { isLoading, data } = useFetch<BreakingBadAPIResponse[]>(
		`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
	);
	return (
		<div>
			<h1>BreakingBad Quotes</h1>
			{isLoading && <div className="alert alert-info text-center">
        Loading...
    </div>
		}

			<button disabled={counter <= 1} onClick={decrement} className="btn">Anterior</button>
      <button onClick={reset} className="btn">Reset</button>
			<button onClick={increment} className="btn">Siguiente</button>
			{data && <Quote author={data[0].author} quote={data[0].quote} /> }
		</div>
	);
}



export const Quote = ({ author, quote }: {author:string, quote:string}) => {

	// hacemos referencia al tag p para que no se renderize todo despues de su cambio en quote
  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

	// este efecto se disparara cada vez que quote cambie
  useLayoutEffect(() => {
		// useLayoutEffect nos ayuda a identificar que la referencia ya esta asignada, pero por TS no lo permite.
    if (pRef.current) {
			const { height, width } =  pRef.current.getBoundingClientRect();
			setBoxSize({ height, width });
		}
  }, [quote])
  


  return (
    <>
      <blockquote 
        className="blockquote text-end flex flex-col"
      >
          <p ref={ pRef } className="mb-1">{ quote }</p>
					<br/>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}