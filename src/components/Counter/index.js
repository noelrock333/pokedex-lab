import CounterStyled from "./style"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon } from '../../store/actions'

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter)

  useEffect(() => {
    dispatch(fetchPokemon(counter))
  }, [counter])

  return (
    <CounterStyled>#{counter}</CounterStyled>
  )
}

export default Counter 