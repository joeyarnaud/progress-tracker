import { SET_CURRENT_USER, LOGOUT_USER } from '../types';

/**
 * @param {object} token
 * @param {object} user
 * @desc gets the token and user information from localstorage and then sets them both in
 * the redux state
 */
export const setCurrentUser = (token) => ({
  type: SET_CURRENT_USER,
  token,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
