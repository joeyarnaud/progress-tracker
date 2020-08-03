import jwtDecode from 'jwt-decode';
import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import { LOGOUT_USER, SET_CURRENT_USER, REFRESH_TOKEN_FAILURE } from 'types';
import { deleteTokens, setTokens } from 'utils/localStorage';

const initialState = {
  tokenInfo: {},
  loading: false,
  reqInterceptor: null,
  resInterceptor: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_USER:
      localStorage.clear();
      axios.interceptors.request.eject(state.reqInterceptor);
      axios.interceptors.response.eject(state.resInterceptor);
      return Object.assign({}, state, initialState);
    case SET_CURRENT_USER:
      setTokens(action.payload);
      const { reqInterceptor, resInterceptor } = setAuthToken(action.payload);
      return {
        ...state,
        tokenInfo: jwtDecode(action.payload.token),
        reqInterceptor: reqInterceptor,
        resInterceptor: resInterceptor,
      };
    case REFRESH_TOKEN_FAILURE:
      axios.interceptors.request.eject(state.reqInterceptor);
      axios.interceptors.response.eject(state.resInterceptor);
      deleteTokens();
      return { tokenInfo: {}, loading: false };
    default:
      return state;
  }
}
