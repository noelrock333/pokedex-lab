import axios from 'axios'

export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export const fetchPokemon = (counter) => async (dispatch) => {
  const response = await axios({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${counter}`
  })
  const { data } = response;
  console.log(data)
  dispatch({ type: 'SET_NAME', payload: data.name })
  dispatch({ type: 'SET_POKEMON_IMAGE_URL', payload: data.sprites.front_default })
}