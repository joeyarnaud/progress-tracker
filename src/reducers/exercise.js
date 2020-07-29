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
  ADD_INPUT_REQUEST,
  ADD_INPUT_SUCCESS,
  ADD_INPUT_FAILURE,
  DELETE_INPUT_REQUEST,
  DELETE_INPUT_SUCCESS,
  DELETE_INPUT_FAILURE,
} from 'types';
import { isEmpty } from 'helpers';

const initialState = {
  exercises: [],
  loading: false,
  exercise: {},
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EXERCISES_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_EXERCISES_SUCCESS:
      return { ...state, loading: false, exercises: action.payload };
    case GET_ALL_EXERCISES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_EXERCISE_REQUEST:
      return { ...state, loading: true };
    case CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        exercises: [...state.exercises, action.payload],
        exercise: action.payload,
      };
    case CREATE_EXERCISE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_EXERCISE_REQUEST:
      return { ...state, loading: true };
    case DELETE_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: state.exercises.filter(
          (ex) => ex._id !== action.payload._id
        ),
        exercise: { deleted: true },
        loading: false,
      };
    case DELETE_EXERCISE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case GET_EXERCISE_REQUEST:
      return { ...state, loading: true };
    case GET_EXERCISE_SUCCESS:
      return { ...state, loading: false, exercise: action.payload };
    case GET_EXERCISE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_INPUT_REQUEST:
      return { ...state, loading: true };
    case ADD_INPUT_SUCCESS:
      return !isEmpty(state.exercise)
        ? {
            ...state,
            loading: false,
            exercise: {
              ...state.exercise,
              inputs: [...state.exercise.inputs, action.payload],
            },
          }
        : state;
    case ADD_INPUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CHANGE_EXERCISE_NAME_REQUEST:
      return { ...state, loading: true };
    case CHANGE_EXERCISE_NAME_SUCCESS:
      return { ...state, loading: false, exercise: action.payload };
    case CHANGE_EXERCISE_NAME_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_INPUT_REQUEST:
      return { ...state, loading: true };
    case DELETE_INPUT_SUCCESS:
      return { ...state, loading: false, exercise: action.payload };
    case DELETE_INPUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
