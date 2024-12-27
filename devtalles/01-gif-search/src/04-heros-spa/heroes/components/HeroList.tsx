import { useMemo } from "react";
import {
	getHerosByPublisher,
	HeroPublisher,
} from "../helpers/getHerosByPublisher";
import { HeroCard } from "./HeroCard";

interface Props {
	publisher: HeroPublisher;
}

export const HeroList = ({ publisher }: Props) => {
	// ya sea pedido de marvel o de dc, se guarga el valor y el key
	const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);

	return (
		<div className="flex flex-wrap justify-center gap-1 m-auto p-auto ">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} hero={hero} />
			))}
		</div>
	);
};
