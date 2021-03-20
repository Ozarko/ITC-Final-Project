import {createStore, applyMiddleware} from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunkMiddleware))
)

export default store