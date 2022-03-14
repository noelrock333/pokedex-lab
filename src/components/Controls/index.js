import { ReactComponent as CaretUp } from '../../assets/arrows-pad/caret-up-solid.svg';
import { ReactComponent as CaretLeft } from '../../assets/arrows-pad/caret-left-solid.svg';
import { ReactComponent as CaretRight } from '../../assets/arrows-pad/caret-right-solid.svg';
import { ReactComponent as CaretDown } from '../../assets/arrows-pad/caret-down-solid.svg';


function Controls() {
  return (
    <div className="controls">
      <div className="arrows-pad">
        <button className="left">
          <CaretLeft />
        </button>
        <button className="up" onClick={() => {}}>
          <CaretUp />
        </button>
        <button className="right" onClick={() => {}}>
          <CaretRight />
        </button>
        <button className="bottom" onClick={() => {}}>
          <CaretDown />
        </button>
      </div>
    </div>
  )
}

export default Controls
