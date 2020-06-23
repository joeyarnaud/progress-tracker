import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import { LOGOUT_USER, SET_CURRENT_USER } from 'types';

const initialState = {
  tokenInfo: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      localStorage.clear();
      return Object.assign({}, state, initialState);
    case SET_CURRENT_USER:
      setAuthToken(action.payload);
      return {
        ...state,
        tokenInfo: jwtDecode(action.payload.token),
      };
    default:
      return state;
  }
}
