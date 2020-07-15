import {
  GET_ALL_EXERCISES_REQUEST,
  GET_ALL_EXERCISES_SUCCESS,
  GET_ALL_EXERCISES_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  GET_EXERCISE_REQUEST,
  GET_EXERCISE_SUCCESS,
  GET_EXERCISE_FAILURE,
  DELETE_EXERCISE_INPUT_REQUEST,
  DELETE_EXERCISE_INPUT_SUCCESS,
  DELETE_EXERCISE_INPUT_FAILURE,
  ADD_EXERCISE_INPUT_REQUEST,
  ADD_EXERCISE_INPUT_SUCCESS,
  ADD_EXERCISE_INPUT_FAILURE,
  CHANGE_EXERCISE_NAME_REQUEST,
  CHANGE_EXERCISE_NAME_SUCCESS,
  CHANGE_EXERCISE_NAME_FAILURE,
  CLEAR_EXERCISE,
  CALL_API,
} from 'types';

/**
 * @desc get a group of exercises
 */
export const getExercises = () => ({
  [CALL_API]: {
    endpoint: `/exercise`,
    method: 'GET',
    types: [
      GET_ALL_EXERCISES_REQUEST,
      GET_ALL_EXERCISES_SUCCESS,
      GET_ALL_EXERCISES_FAILURE,
    ],
  },
});

/**
 *
 * @param {string} id
 * @desc delete a specific exercise
 */
export const deleteExercise = (id) => ({
  [CALL_API]: {
    endpoint: `/exercise/${id}`,
    method: 'DELETE',
    types: [
      DELETE_EXERCISE_REQUEST,
      DELETE_EXERCISE_SUCCESS,
      DELETE_EXERCISE_FAILURE,
    ],
  },
});

/**
 *
 * @param {string} id
 * @desc get a specific exercise
 */
export const getExercise = (id) => ({
  [CALL_API]: {
    endpoint: `/exercise/${id}`,
    method: 'GET',
    types: [GET_EXERCISE_REQUEST, GET_EXERCISE_SUCCESS, GET_EXERCISE_FAILURE],
  },
});

/**
 *
 * @param {string} id
 * @param {string} inputId
 * @desc delete an input for an exercise
 */
export const deleteInput = (id, inputId) => ({
  [CALL_API]: {
    endpoint: `/exercise/${id}/delete-input/${inputId}`,
    method: 'PUT',
    types: [
      DELETE_EXERCISE_INPUT_REQUEST,
      DELETE_EXERCISE_INPUT_SUCCESS,
      DELETE_EXERCISE_INPUT_FAILURE,
    ],
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
    endpoint: `/exercise/${id}/add-input`,
    method: 'PUT',
    body: {
      input,
    },
    types: [
      ADD_EXERCISE_INPUT_REQUEST,
      ADD_EXERCISE_INPUT_SUCCESS,
      ADD_EXERCISE_INPUT_FAILURE,
    ],
  },
});

export const changeExerciseName = (name, id) => ({
  [CALL_API]: {
    endpoint: `/exercise/change-name/${id}`,
    method: 'PUT',
    body: {
      name,
    },
    types: [
      CHANGE_EXERCISE_NAME_REQUEST,
      CHANGE_EXERCISE_NAME_SUCCESS,
      CHANGE_EXERCISE_NAME_FAILURE,
    ],
  },
});

export const clearExercise = (id) => ({
  type: CLEAR_EXERCISE,
});
