import {
  GET_ALL_EXERCISES_REQUEST,
  GET_ALL_EXERCISES_SUCCESS,
  GET_ALL_EXERCISES_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
} from 'types';

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
    case DELETE_EXERCISE_REQUEST:
      return { ...state, loading: true };
    case DELETE_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: state.exercises.filter(
          (ex) => ex._id !== action.payload._id
        ),
        loading: false,
      };
    case DELETE_EXERCISE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
