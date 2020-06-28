import axios from 'axios';
import {
  CALL_API,
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE,
  GET_WORKOUT_REQUEST,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
  GET_WORKOUTS_REQUEST,
  GET_WORKOUTS_SUCCESS,
  GET_WORKOUTS_FAILURE,
  DELETE_WORKOUT_REQUEST,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
  ADD_EXERCISE_TO_WORKOUT_REQUEST,
  ADD_EXERCISE_TO_WORKOUT_SUCCESS,
  ADD_EXERCISE_TO_WORKOUT_FAILURE,
  CLEAR_WORKOUT,
} from 'types';

/**
 *
 * @param {string} name
 * @param {array} exercises
 * @desc creates a workout
 * @method POST
 */
export const postWorkout = (name, exercises) => ({
  [CALL_API]: {
    endpoint: '/workout/create',
    method: 'POST',
    body: {
      name,
      exercises,
    },
    types: [
      CREATE_WORKOUT_REQUEST,
      CREATE_WORKOUT_SUCCESS,
      CREATE_WORKOUT_FAILURE,
    ],
  },
});

/**
 *
 * @param {string} id
 * @desc get a specific workout
 */
export const getWorkout = (id) => ({
  [CALL_API]: {
    endpoint: `/workout/${id}`,
    method: 'GET',
    types: [GET_WORKOUT_REQUEST, GET_WORKOUT_SUCCESS, GET_WORKOUT_FAILURE],
  },
});

/**
 * @desc get all workouts
 */
export const getWorkouts = () => ({
  [CALL_API]: {
    endpoint: `/workout`,
    method: 'GET',
    types: [GET_WORKOUTS_REQUEST, GET_WORKOUTS_SUCCESS, GET_WORKOUTS_FAILURE],
  },
});

/**
 *
 * @param {string} id
 */
export const deleteWorkout = (id) => ({
  [CALL_API]: {
    endpoint: `/workout/${id}`,
    method: 'DELETE',
    types: [
      DELETE_WORKOUT_REQUEST,
      DELETE_WORKOUT_SUCCESS,
      DELETE_WORKOUT_FAILURE,
    ],
  },
});

export const addExercise = (workout_id, name, weight, sets, reps) => ({
  [CALL_API]: {
    endpoint: `/workout/update/${workout_id}`,
    method: 'PUT',
    body: {
      name,
      weight,
      sets,
      reps,
    },
    types: [
      ADD_EXERCISE_TO_WORKOUT_REQUEST,
      ADD_EXERCISE_TO_WORKOUT_SUCCESS,
      ADD_EXERCISE_TO_WORKOUT_FAILURE,
    ],
  },
});

/**
 * @desc clear the workouts global state
 */
export const clearWorkout = () => ({ type: CLEAR_WORKOUT });
