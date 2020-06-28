import {
  GET_ALL_EXERCISES_REQUEST,
  GET_ALL_EXERCISES_SUCCESS,
  GET_ALL_EXERCISES_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  CALL_API,
} from 'types';

/**
 *
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
 * @param {*} id
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
