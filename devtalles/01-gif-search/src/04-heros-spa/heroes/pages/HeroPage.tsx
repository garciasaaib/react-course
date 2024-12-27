import { useNavigate, useParams } from "react-router";
import { getHeroeById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {
	const { id } = useParams();
	const navigator = useNavigate()

	// recuerda useMemo es para manejo de funciones
	// la respuesta es guardado correspondiente a la variable
	const hero = useMemo(() => getHeroeById(id ?? ""), [id]) ;

	if (!hero) return <p>No hero found</p>;

	const heroImgUrl = `/public/assets/heroes/${hero.id}.jpg`;

	const onNavigateBack = () => {
		navigator(-1) // retorna una pagina
	}

	return (
		<>
			<div className="flex gap-2 animate__animated animate__fadeIn">
				<img className="h-80" src={heroImgUrl} alt={hero.superhero} />
				<div className="flex flex-col justify-between">
					<div>
						<p className="text-xs">{hero.superhero}</p>
						<p className="text-xs">
							<small><b>Alter Ego: </b>{hero.alter_ego}</small>
						</p>
						<h5 className="text-xs">
							<b>First appearance: </b>{hero.first_appearance}
						</h5>
						<p className="text-xs"><b>Characters: </b>{hero.characters}</p>
					</div>
					<div className="flex justify-end gap-2 m-2">
						<button onClick={onNavigateBack} className="btn">Regresar</button>
					</div>
				</div>
			</div>
		</>
	);
};
