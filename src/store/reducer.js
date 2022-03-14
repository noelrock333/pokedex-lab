const initialState = {
  counter: 0,
  name: '',
  pokemonImageUrl: ''
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'INCREMENT': {
      const stateResult = {
        ...state,
        counter: state.counter + 1
      }
      return stateResult
    }
    case 'DECREMENT': {
      const stateResult = {
        ...state,
        counter: state.counter - 1
      }
      return stateResult
    }
    case 'SET_NAME': {
      const stateResult = {
        ...state,
        name: payload
      }
      return stateResult
    }
    case 'SET_POKEMON_IMAGE_URL': {
      return {
        ...state,
        pokemonImageUrl: payload
      }
    }
    default:
      return state
  }
}

export default reducer;