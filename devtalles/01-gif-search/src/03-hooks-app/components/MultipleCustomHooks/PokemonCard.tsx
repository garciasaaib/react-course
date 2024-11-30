import { Sprites } from "../../types/Pokeapi";

interface Props {
	id: number;
	name: string;
	sprites: Sprites;
}
export const PokemonCard = ({ id, name, sprites }: Props) => {
	const images = Object.values(sprites).filter(
		(value) => typeof value === "string"
	);
	return (
		<section className="">
			<p className="uppercase">id: {id}</p>
			<p className="capitalize">name: {name}</p>
			{/* Imagenes */}
			<div className="flex flex-wrap">
				{images.map((img) => (
					<img src={img} key={img} />
				))}
			</div>
		</section>
	);
};
