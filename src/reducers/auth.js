import jwtDecode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import { LOGOUT_USER, SET_CURRENT_USER, REFRESH_TOKEN_FAILURE } from 'types';
import { deleteTokens, setTokens } from 'utils/localStorage';

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
      setTokens(action.payload);
      setAuthToken(action.payload);
      return {
        ...state,
        tokenInfo: jwtDecode(action.payload.token),
      };
    case REFRESH_TOKEN_FAILURE:
      deleteTokens();
      return { tokenInfo: {}, loading: false };
    default:
      return state;
  }
}
