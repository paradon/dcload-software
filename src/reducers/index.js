import { combineReducers } from 'redux';
import dcload from './dcload';
import csvlog from './csvlog';

const rootReducer = combineReducers({
  dcload,
  csvlog,
});

export default rootReducer;
