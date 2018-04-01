import { combineReducers } from 'redux';
import dcload from './dcload';
import csvlog from './csvlog';
import serialdriver, * as fromSerialdriver from './serialdriver';

const rootReducer = combineReducers({
  dcload,
  csvlog,
  serialdriver,
});

export default rootReducer;

export const getSerialportLoadingState = state => fromSerialdriver.getSerialportLoadingState(state);
export const getSerialportList = state => fromSerialdriver.getSerialportList(state);
