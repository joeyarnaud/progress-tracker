import { combineReducers } from 'redux';
import auth from './auth';
import workout from './workout';
import exercise from './exercise';

export default combineReducers({
  auth,
  workout,
  exercise,
});
