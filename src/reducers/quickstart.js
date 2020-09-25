import {
  GET_UNFINISHED_WORKOUTS_REQUEST,
  GET_UNFINISHED_WORKOUTS_SUCCESS,
  GET_UNFINISHED_WORKOUTS_FAILURE,
  CLEAR_QUICKSTART,
} from 'types';

const initialState = {
  workout: {},
  unfinishedWorkouts: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UNFINISHED_WORKOUTS_REQUEST:
      return { ...state, loading: true };
    case GET_UNFINISHED_WORKOUTS_SUCCESS:
      return { ...state, loading: false, unfinishedWorkouts: action.payload };
    case GET_UNFINISHED_WORKOUTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_QUICKSTART:
      return {
        workout: {},
        loading: false,
        error: {},
      };
    default:
      return state;
  }
}
