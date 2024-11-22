// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import {heroes} from './heros';

// console.log( owners );




export const getHeroeById = (id: number) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = (owner: string) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


