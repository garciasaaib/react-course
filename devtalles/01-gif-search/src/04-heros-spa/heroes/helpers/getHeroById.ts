import { Hero, heroes } from "../data/heros-with-description";

export const getHeroeById = (id: string): Hero | undefined =>
	heroes.find((hero) => hero.id === id);
