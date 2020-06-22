import React, { useReducer } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ExerciseDisplay, ExerciseCreate } from 'components/add-workout';
import { isEmpty } from 'helpers';

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

const reducer = (state, action) => {
  console.log(action);
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
            weightType: 'kg',
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
    default:
      return state;
  }
};

function AddWorkout() {
  const [state, dispatch] = useReducer(reducer, { exercises: [] });
  const { exercises } = state;
  console.log(state);
  return (
    <Container>
      <Title>Add Workout</Title>
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
            <SubmitWorkoutButton variant='outline-primary'>
              Submit Workout
            </SubmitWorkoutButton>
          )}
      </div>
    </Container>
  );
}

export default AddWorkout;
