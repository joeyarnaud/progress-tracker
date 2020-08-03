import React, { useReducer } from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  ExerciseDisplay,
  ExerciseCreate,
} from 'components/workouts/add-workout';
import { isEmpty } from 'helpers';
import {
  TitleContainer,
  TitleLabel,
  TitleInput,
} from 'components/workouts/add-workout/common';
import { postWorkout, clearWorkout } from 'actions';

const Title = styled.h2`
  font-size: 3rem;
  margin: 2rem 0;
  color: ${(props) => props.theme.colors.colorSuccess};
`;

const SubmitWorkoutButton = styled(Button)`
  font-size: 1.6rem;
  padding: 1rem 5rem;
`;

const ADD_EXERCISE = 'ADD_EXERCISE';
const SUBMIT_EXERCISE = 'SUBMIT_EXERCISE';
const CANCEL_LAST_EXERCISE = 'CANCEL_LAST_EXERCISE';
const TITLE_INPUT = 'TITLE_INPUT';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.exercises,
          {
            title: '',
            weight: '',
            sets: '',
            reps: '',
            type: 'kg',
            submitted: false,
          },
        ],
      };
    case SUBMIT_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, state.exercises.length - 1),
          action.payload,
        ],
      };
    case CANCEL_LAST_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises.slice(0, state.exercises.length - 1)],
      };
    case TITLE_INPUT:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

function AddWorkout(props) {
  const [state, dispatch] = useReducer(reducer, { exercises: [], title: '' });
  const { exercises, title } = state;
  const { workout } = props;

  if (!isEmpty(workout)) {
    props.clearWorkout();
  }

  return isEmpty(workout) ? (
    <Container>
      <Title>Add Workout</Title>
      <TitleContainer>
        <TitleLabel>Workout Name *required</TitleLabel>
        <TitleInput
          type='text'
          placeholder='Workout Name'
          value={title}
          onChange={(e) =>
            dispatch({ type: TITLE_INPUT, payload: e.target.value })
          }
        />
      </TitleContainer>
      <Container>
        {exercises &&
          exercises.map((exercise, index) => {
            return exercise.submitted ? (
              <ExerciseDisplay key={index} {...exercise} />
            ) : (
              <ExerciseCreate
                exercise={exercise}
                handleSubmit={(exercise) =>
                  dispatch({ type: SUBMIT_EXERCISE, payload: exercise })
                }
                cancelExercise={() => dispatch({ type: CANCEL_LAST_EXERCISE })}
                key={index}
              />
            );
          })}
      </Container>

      {(isEmpty(exercises) || exercises[exercises.length - 1].submitted) && (
        <Button
          variant='success'
          onClick={() => dispatch({ type: ADD_EXERCISE })}
        >
          <i className='fas fa-plus-circle'></i> Add Exercise
        </Button>
      )}
      <div style={{ marginTop: '2rem' }}>
        {(isEmpty(exercises) || exercises[exercises.length - 1].submitted) &&
          exercises.length > 0 && (
            <SubmitWorkoutButton
              onClick={() => props.postWorkout(title, exercises)}
              variant='outline-primary'
            >
              Submit Workout
            </SubmitWorkoutButton>
          )}
      </div>
    </Container>
  ) : (
    <Redirect to={`/workout/${workout._id}`} />
  );
}

const mapStateToProps = (state) => ({
  workout: state.workout.workout,
});

const mapDispatchToProps = (dispatch) => ({
  postWorkout: (title, exercises) => dispatch(postWorkout(title, exercises)),
  clearWorkout: () => dispatch(clearWorkout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout);
