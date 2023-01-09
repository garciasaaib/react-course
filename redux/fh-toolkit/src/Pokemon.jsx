import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export default function Pokemon() {
  const dispatch = useDispatch()
  const {pokemons, isLoading, page} = useSelector(state => state.pokemon)
  React.useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <div>
      <h1>Pokemon</h1>
      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'}</span>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </div>
  )
}