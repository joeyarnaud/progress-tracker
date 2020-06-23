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
  CLEAR_WORKOUT,
} from 'types';

const initialState = {
  workouts: [],
  loading: false,
  workout: {},
  error: {},
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
    case GET_WORKOUTS_REQUEST:
      return { ...state, loading: true };
    case GET_WORKOUTS_SUCCESS:
      return { ...state, loading: false, workouts: action.payload };
    case GET_WORKOUTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_WORKOUT:
      return { workouts: [], loading: false, workout: {}, error: {} };
    default:
      return state;
  }
}
