import { Hero, heroes } from "../data/heros-with-description";

export const getHeroesByText = (text: string): Hero[] => {
	const lowerCaseText = text.toLowerCase();
	return heroes.filter(
		({ superhero, alter_ego, characters, first_appearance, id, publisher }) => {
			const heroStrings = [
				superhero.toLowerCase(),
				alter_ego.toLowerCase(),
				characters.toLowerCase(),
				first_appearance.toLowerCase(),
				id.toLowerCase(),
				publisher.toLowerCase(),
			];

			return lowerCaseText && heroStrings.some((item) => item.includes(lowerCaseText));
			// return superhero.includes(lowerCaseText);
		}
	);
};
