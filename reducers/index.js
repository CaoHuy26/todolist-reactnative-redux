import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

const allReducers = combineReducers({
  todoReducers
});

export default allReducers;