import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import info from './reducers/info-reducer';

const reducer = combineReducers({
  info
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;