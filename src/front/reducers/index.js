import { combineReducers } from 'redux';
import Info from './info';

const rootReducer = combineReducers({
  info: Info,
});

export default rootReducer;
