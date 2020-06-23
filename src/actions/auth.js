import {
  CALL_API,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_CURRENT_USER,
  LOGOUT_USER,
} from '../types';

/**
 * @param {object} token
 * @param {object} user
 * @desc gets the token and user information from localstorage and then sets them both in
 * the redux state
 */
export const setCurrentUser = (data) => ({
  type: SET_CURRENT_USER,
  payload: data,
});

/**
 * @route /api/login
 * @method POST
 * @param {string} email
 * @param {password} password
 * @desc login the user
 */
export const loginUser = (email, password) => ({
  [CALL_API]: {
    endpoint: '/login',
    method: 'POST',
    body: {
      email,
      password,
    },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
