import { useNavigate, useSearchParams } from "react-router";
import { useForm } from "../../ui/hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByText } from "../helpers/getHeroesByText";
import { useEffect, useMemo } from "react";

export const SearchPage = () => {
	const navigate = useNavigate();
	const { searchText, onInputChange } = useForm({ searchText: "" });
	const [searchParams] = useSearchParams();

	// Get a specific query parameter
	const paramValue = searchParams.get("q");

	const heroes = useMemo(() => getHeroesByText(paramValue || ""), [paramValue]);
	// al dar enter en el boton evaluamos searctext
	// si es de menor longitud que 1 no hace nada
	// si es mayor longitud de 1 inyecta la ruta
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchText.trim().length <= 1) return;
		navigate(`?q=${searchText}`);
	};

	useEffect(() => {
		if (searchText === "") navigate("");
	}, [searchText]);

	return (
		<div>
			<h1>Search</h1>
			<hr />
			<div>
				<form onSubmit={onSubmit}>
					<input
						type="search"
						placeholder="Search a hero..."
						className="search-input"
						name="searchText"
						autoComplete="off"
						onChange={onInputChange}
					/>
					<button className="btn">Send</button>
				</form>
			</div>
			<div>
				<h4>Results:</h4>
				{!paramValue ? (
					<div className="alert alert-primary animate__animated animate__fadeIn">
						Search Hero
					</div>
				) : !heroes.length ? (
					<div className="alert alert-danger animate__animated animate__fadeIn">
						Not Hero found with <b>{paramValue}</b>
					</div>
				) : (
					<div className="flex flex-wrap">
						{heroes?.map((hero) => (
							<HeroCard hero={hero} key={hero.id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};
