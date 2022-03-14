import PokedexLeft from './components/PokedexLeft'
import PokedexRight from './components/PokedexRight';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PokedexLeft />
        <PokedexRight />
      </div>
    </Provider>
  );
}

export default App;
