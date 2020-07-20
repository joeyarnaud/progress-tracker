import {
  ADD_INPUT_REQUEST,
  ADD_INPUT_SUCCESS,
  ADD_INPUT_FAILURE,
  DELETE_INPUT_REQUEST,
  DELETE_INPUT_SUCCESS,
  DELETE_INPUT_FAILURE,
  CALL_API,
} from 'types';

/**
 *
 * @param {string} id
 * @param {string} inputId
 * @desc delete an input for an exercise
 */
export const deleteInput = (exId, inputId) => ({
  [CALL_API]: {
    endpoint: `/input/${inputId}/exercise/${exId}`,
    method: 'DELETE',
    types: [DELETE_INPUT_REQUEST, DELETE_INPUT_SUCCESS, DELETE_INPUT_FAILURE],
  },
});

/**
 *
 * @param {string} id
 * @param {string} inputId
 * @desc add an input for an exercise
 */
export const addInput = (id, input) => ({
  [CALL_API]: {
    endpoint: `/input/input-exercise/${id}`,
    method: 'POST',
    body: {
      input,
    },
    types: [ADD_INPUT_REQUEST, ADD_INPUT_SUCCESS, ADD_INPUT_FAILURE],
  },
});
