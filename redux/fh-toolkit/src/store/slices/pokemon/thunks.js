import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    // cambia el estado a cargando
    dispatch(startLoadingPokemons())

    //  llamada a la api
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
    // const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset'+ page*10).then((res) => res.json())

    // al terminar se setea la respuesta de la api
    dispatch(setPokemons(data))
  }
}