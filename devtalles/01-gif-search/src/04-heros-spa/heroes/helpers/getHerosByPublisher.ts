import { Hero,  heroes } from "../data/heros-with-description";

export type HeroPublisher = Hero["publisher"] | "";


export const getHerosByPublisher = (pubString: HeroPublisher) => {
  if (!pubString) return heroes;
  return heroes.filter(({ publisher }) => publisher === pubString);
}