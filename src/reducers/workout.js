import {
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_FAILURE,
  GET_WORKOUT_REQUEST,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
  GET_WORKOUTS_REQUEST,
  GET_WORKOUTS_SUCCESS,
  GET_WORKOUTS_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  DELETE_WORKOUT_REQUEST,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
  ADD_EXERCISE_TO_WORKOUT_REQUEST,
  ADD_EXERCISE_TO_WORKOUT_SUCCESS,
  ADD_EXERCISE_TO_WORKOUT_FAILURE,
  CHANGE_WORKOUT_NAME_REQUEST,
  CHANGE_WORKOUT_NAME_SUCCESS,
  CHANGE_WORKOUT_NAME_FAILURE,
  SUBMIT_WORKOUT_REQUEST,
  SUBMIT_WORKOUT_SUCCESS,
  SUBMIT_WORKOUT_FAILURE,
  CLEAR_WORKOUT,
} from 'types';
import { isEmpty } from 'helpers';

const initialState = {
  workouts: [],
  loading: false,
  workout: {},
  error: {},
  deleted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_WORKOUT_REQUEST:
      return { ...state, loading: true };
    case CREATE_WORKOUT_SUCCESS:
      return { ...state, loading: false, workout: action.payload };
    case CREATE_WORKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_WORKOUT_REQUEST:
      return { ...state, loading: true };
    case GET_WORKOUT_SUCCESS:
      return { ...state, loading: false, workout: action.payload };
    case GET_WORKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_EXERCISE_TO_WORKOUT_REQUEST:
      return { ...state, loading: true };
    case ADD_EXERCISE_TO_WORKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        workout: {
          ...state.workout,
          ...action.payload,
        },
      };
    case ADD_EXERCISE_TO_WORKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_WORKOUTS_REQUEST:
      return { ...state, loading: true };
    case GET_WORKOUTS_SUCCESS:
      return { ...state, loading: false, workouts: action.payload };
    case GET_WORKOUTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_EXERCISE_REQUEST:
      return { ...state, loading: true };
    case DELETE_EXERCISE_SUCCESS:
      return !isEmpty(state.workout.exercises)
        ? {
            ...state,
            loading: false,
            workout: {
              ...state.workout,
              exercises: state.workout.exercises.filter(
                (ex) => ex._id !== action.payload._id
              ),
            },
          }
        : state;
    case DELETE_EXERCISE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_WORKOUT_REQUEST:
      return { ...state, loading: true };
    case DELETE_WORKOUT_SUCCESS:
      return { ...state, loading: false, workout: { deleted: true } };
    case DELETE_WORKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CHANGE_WORKOUT_NAME_REQUEST:
      return { ...state, loading: true };
    case CHANGE_WORKOUT_NAME_SUCCESS:
      return { ...state, loading: false, workout: action.payload };
    case CHANGE_WORKOUT_NAME_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_WORKOUT_REQUEST:
      return { ...state, loading: true };
    case SUBMIT_WORKOUT_SUCCESS:
      return { ...state, loading: false, workout: action.payload };
    case SUBMIT_WORKOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_WORKOUT:
      return { workouts: [], loading: false, workout: {}, error: {} };
    default:
      return state;
  }
}
