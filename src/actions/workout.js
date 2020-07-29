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
  CHANGE_WORKOUT_NAME_REQUEST,
  CHANGE_WORKOUT_NAME_SUCCESS,
  CHANGE_WORKOUT_NAME_FAILURE,
  GET_UNFINISHED_WORKOUTS_REQUEST,
  GET_UNFINISHED_WORKOUTS_SUCCESS,
  GET_UNFINISHED_WORKOUTS_FAILURE,
  SUBMIT_WORKOUT_REQUEST,
  SUBMIT_WORKOUT_SUCCESS,
  SUBMIT_WORKOUT_FAILURE,
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

/**
 *
 * @param {string} workout_id
 * @param {string} name
 * @param {number} weight
 * @param {number} sets
 * @param {number} reps
 * @param {string} type
 * @param {date} date
 * @desc Add an exercise to the workout of workout_id
 */
export const addExercise = (
  workout_id,
  name,
  weight,
  sets,
  reps,
  type,
  date
) => ({
  [CALL_API]: {
    endpoint: `/workout/add-exercise/${workout_id}`,
    method: 'PUT',
    body: {
      name,
      weight,
      sets,
      reps,
      type,
      date,
    },
    types: [
      ADD_EXERCISE_TO_WORKOUT_REQUEST,
      ADD_EXERCISE_TO_WORKOUT_SUCCESS,
      ADD_EXERCISE_TO_WORKOUT_FAILURE,
    ],
  },
});

/**
 *
 * @param {string} name
 * @param {string} id
 * @desc change the name of the workout
 */
export const changeName = (name, id) => ({
  [CALL_API]: {
    endpoint: `/workout/change-name/${id}`,
    method: 'PUT',
    body: {
      name,
    },
    types: [
      CHANGE_WORKOUT_NAME_REQUEST,
      CHANGE_WORKOUT_NAME_SUCCESS,
      CHANGE_WORKOUT_NAME_FAILURE,
    ],
  },
});

/**
 * @desc get all the unfinished workouts
 */
export const getUnsubmittedWorkouts = () => ({
  [CALL_API]: {
    endpoint: `/workout/unfinished`,
    method: 'GET',
    types: [
      GET_UNFINISHED_WORKOUTS_REQUEST,
      GET_UNFINISHED_WORKOUTS_SUCCESS,
      GET_UNFINISHED_WORKOUTS_FAILURE,
    ],
  },
});

export const submitWorkout = (id) => ({
  [CALL_API]: {
    endpoint: `/workout/submit/${id}`,
    method: 'PUT',
    types: [
      SUBMIT_WORKOUT_REQUEST,
      SUBMIT_WORKOUT_SUCCESS,
      SUBMIT_WORKOUT_FAILURE,
    ],
  },
});

/**
 * @desc clear the workouts global state
 */
export const clearWorkout = () => ({ type: CLEAR_WORKOUT });
