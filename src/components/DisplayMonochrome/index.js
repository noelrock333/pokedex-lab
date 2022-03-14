import DisplayMonochromeStyled from "./style"
import { useSelector } from 'react-redux'

function DisplayMonochrome() {
  const pokemonName = useSelector(store => store.name)
  return (
    <DisplayMonochromeStyled>
      <label>Pokemon: {pokemonName}</label>
      <br></br>
      <label>Abilities: N/A</label>
    </DisplayMonochromeStyled>
  )
}

export default DisplayMonochrome