import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import info from './reducers/info-reducer';
import inspect from './reducers/inspect-reducer';
import point from './reducers/point-reducer';
const reducer = combineReducers({
  info,
  inspect,
  point
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;