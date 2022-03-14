import { ReactComponent as CaretUp } from '../../assets/arrows-pad/caret-up-solid.svg';
import { ReactComponent as CaretLeft } from '../../assets/arrows-pad/caret-left-solid.svg';
import { ReactComponent as CaretRight } from '../../assets/arrows-pad/caret-right-solid.svg';
import { ReactComponent as CaretDown } from '../../assets/arrows-pad/caret-down-solid.svg';
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../store/actions.js'


function Controls() {
  const dispatch = useDispatch()
  return (
    <div className="controls">
      <div className="arrows-pad">
        <button className="left">
          <CaretLeft />
        </button>
        <button className="up" onClick={() => { dispatch(increment()) }}>
          <CaretUp />
        </button>
        <button className="right" onClick={() => { }}>
          <CaretRight />
        </button>
        <button className="bottom" onClick={() => { dispatch(decrement()) }}>
          <CaretDown />
        </button>
      </div>
    </div>
  )
}

export default Controls
