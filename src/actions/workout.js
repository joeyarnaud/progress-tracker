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
  CLEAR_WORKOUT,
} from 'types';

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

export const getWorkout = (id) => ({
  [CALL_API]: {
    endpoint: `/workout/${id}`,
    method: 'GET',
    types: [GET_WORKOUT_REQUEST, GET_WORKOUT_SUCCESS, GET_WORKOUT_FAILURE],
  },
});

export const getWorkouts = () => ({
  [CALL_API]: {
    endpoint: `/workout`,
    method: 'GET',
    types: [GET_WORKOUTS_REQUEST, GET_WORKOUTS_SUCCESS, GET_WORKOUTS_FAILURE],
  },
});

export const clearWorkout = () => ({ type: CLEAR_WORKOUT });
