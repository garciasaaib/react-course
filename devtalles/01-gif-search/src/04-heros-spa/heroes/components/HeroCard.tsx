import { Link } from "react-router";
import { Hero } from "../data/heros-with-description";

interface Props {
	hero: Hero;
}
export const HeroCard = ({ hero }: Props) => {
	const heroImgUrl = `/public/assets/heroes/${hero.id}.jpg`;
	return (
		<div className="card mb-3 w-44 h-100">
			<div>
				<img className="animate__animated animate__fadeIn" src={heroImgUrl} alt={hero.superhero} />
				<div>
					<p className="text-xs text-center">{hero.superhero}</p>
					<p className="text-xs">
						<small>{hero.alter_ego}</small>
					</p>
					{/* {hero.alter_ego !== hero.characters && <p>{hero.characters}</p>} */}
					<h5 className="text-xs">
						<small className="text-muted">{hero.first_appearance}</small>
					</h5>
					<Link className="hover:underline" to={`/hero/${hero.id}`}>Más...</Link>
				</div>
			</div>
		</div>
	);
};
