import { combineReducers } from 'redux';
import auth from './auth';
import workout from './workout';

export default combineReducers({
  auth,
  workout,
});
