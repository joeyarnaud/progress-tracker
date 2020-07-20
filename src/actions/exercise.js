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
  CHANGE_EXERCISE_NAME_REQUEST,
  CHANGE_EXERCISE_NAME_SUCCESS,
  CHANGE_EXERCISE_NAME_FAILURE,
  CREATE_EXERCISE_REQUEST,
  CREATE_EXERCISE_SUCCESS,
  CREATE_EXERCISE_FAILURE,
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
 * @param {string} name
 * @param {number} id
 * @desc changes the name of the exercise
 */
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

/**
 *
 * @param {string} name
 * @param {number} weight
 * @param {number} sets
 * @param {number} reps
 * @param {string} type
 * @param {string} date
 * @desc create a single exercise
 */
export const createExercise = (name, weight, sets, reps, type, date) => ({
  [CALL_API]: {
    endpoint: `/exercise`,
    method: 'POST',
    body: {
      name,
      weight,
      sets,
      reps,
      type,
      date,
    },
    types: [
      CREATE_EXERCISE_REQUEST,
      CREATE_EXERCISE_SUCCESS,
      CREATE_EXERCISE_FAILURE,
    ],
  },
});

export const clearExercise = (id) => ({
  type: CLEAR_EXERCISE,
});
