import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = state.page + 1
      state.pokemons = action.payload.results

    }
  },
})

// Action thunk
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// Actions
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

// Selectors
// export const selectValue = (state) => state.pokemon.value

// Reducers
export default pokemonSlice.reducer

