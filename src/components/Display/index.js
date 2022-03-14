import DisplayStyled, { ScreenStyled } from "./style";
import { useSelector } from 'react-redux'

function Display() {
  const pokemonImageUrl = useSelector(store => store.pokemonImageUrl)
  return (
      <DisplayStyled>
          <div className="red-dots-row">
              <div className="red-dot" />
              <div className="red-dot" />
          </div>
          <ScreenStyled>
            <img src={pokemonImageUrl} />
          </ScreenStyled>
      </DisplayStyled>
  )
}

export default Display