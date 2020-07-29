import { combineReducers } from 'redux';
import auth from './auth';
import workout from './workout';
import exercise from './exercise';
import quickstart from './quickstart';

export default combineReducers({
  auth,
  workout,
  exercise,
  quickstart,
});
