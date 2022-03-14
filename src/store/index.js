import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import myReducer from './reducer'

const store = createStore(myReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store