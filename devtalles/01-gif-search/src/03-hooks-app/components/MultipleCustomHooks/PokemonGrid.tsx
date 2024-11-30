import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import { Pokeapiresponse } from '../../types/Pokeapi';
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const PokemonGrid = () => {
	const { counter, decrement, increment, reset } = useCounter(1);
	const { isLoading, data } = useFetch<Pokeapiresponse>(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);
	return (
		<div>
			<h1>Info: {counter}</h1>
			{isLoading && <LoadingMessage />}

			<button disabled={counter <= 1} onClick={decrement} className="btn">Anterior</button>
      <button onClick={reset} className="btn">Reset</button>
			<button onClick={increment} className="btn">Siguiente</button>
			{data && <PokemonCard name={data.name} id={data.id} sprites={data.sprites}/> }
		</div>
	);
};
