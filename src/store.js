import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// One-line middleware to support 'false' as non-action
const NullActionMiddleware = store => next => action => action === false ? undefined : next(action);

export default initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    NullActionMiddleware,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
