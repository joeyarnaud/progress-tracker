import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setLocalStorage } from '../utils/localStorage';
import { LOGOUT_USER, SET_CURRENT_USER } from '../types';

const initialState = {
  token: {},
  tokenInfo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      localStorage.clear();
      return Object.assign({}, state, initialState);
    case SET_CURRENT_USER:
      setLocalStorage(action.token, 'token');
      setAuthToken(action.token);
      return {
        ...state,
        token: action.token,
        tokenInfo: jwtDecode(action.token),
      };
    default:
      return state;
  }
}
