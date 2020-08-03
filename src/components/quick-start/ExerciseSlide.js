import React, { useReducer } from 'react';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { isEmpty } from 'helpers';
import {
  ExerciseContainer,
  TitleContainer,
  TitleLabel,
  TitleInput,
  ExerciseInputContainer,
  ExerciseInput,
  ExerciseInputLabel,
  Select,
  MarginRight,
} from 'components/workouts/add-workout';
import { InfoContainer } from 'components/quick-start';

const TITLE_INPUT = 'TITLE_INPUT';
const WEIGHT_INPUT = 'WEIGHT_INPUT';
const REP_INPUT = 'REP_INPUT';
const SET_INPUT = 'SET_INPUT';
const SET_WEIGHT_TYPE = 'SET_WEIGHT_TYPE';
const CLEAR = 'CLEAR';

const reducer = (state, action) => {
  switch (action.type) {
    case TITLE_INPUT:
      return { ...state, name: action.payload };
    case WEIGHT_INPUT:
      if (action.payload.match(/[^0-9]/g)) {
        return state;
      }
      return { ...state, weight: action.payload };
    case REP_INPUT:
      if (action.payload.match(/[^0-9]/g)) {
        return state;
      }
      return { ...state, reps: action.payload };
    case SET_INPUT:
      if (action.payload.match(/[^0-9]/g)) {
        return state;
      }
      return { ...state, sets: action.payload };
    case SET_WEIGHT_TYPE:
      return { ...state, type: action.payload };
    case CLEAR:
      return { name: '', weight: '', reps: '', sets: '', type: 'kg' };
    default:
      return state;
  }
};

function ExerciseSlide(props) {
  console.log(props);
  const [state, dispatch] = useReducer(reducer, {
    name: props.name,
    weight: props.weight,
    reps: props.reps,
    sets: props.sets,
    type: props.type,
  });
  const { name, weight, reps, sets, type } = state;

  return (
    <InfoContainer>
      <Container>
        <TitleContainer>
          <TitleLabel>Exercise Name *required</TitleLabel>
          <TitleInput
            type='text'
            placeholder='Exercise Name'
            value={name}
            onChange={(e) => {
              return dispatch({
                type: TITLE_INPUT,
                payload: e.target.value,
              });
            }}
          />
        </TitleContainer>
        <ExerciseContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Weight</ExerciseInputLabel>
            <ExerciseInput
              type='text'
              placeholder='weight'
              value={weight}
              onChange={(e) =>
                dispatch({ type: WEIGHT_INPUT, payload: e.target.value })
              }
              style={{ width: '100%' }}
            />
            <Select
              value={type}
              onChange={(e) =>
                dispatch({ type: SET_WEIGHT_TYPE, payload: e.target.value })
              }
              style={{ top: '2.6rem' }}
            >
              <option value='kg'>kg</option>
              <option value='lb'>lb</option>
              <option value='na'>N/A</option>
            </Select>
          </ExerciseInputContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Reps</ExerciseInputLabel>
            <ExerciseInput
              type='text'
              placeholder='reps'
              value={reps}
              onChange={(e) =>
                dispatch({ type: REP_INPUT, payload: e.target.value })
              }
              style={{ width: '100%' }}
            />
          </ExerciseInputContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Sets *required</ExerciseInputLabel>
            <ExerciseInput
              type='text'
              placeholder='sets'
              value={sets}
              onChange={(e) =>
                dispatch({ type: SET_INPUT, payload: e.target.value })
              }
              style={{ width: '100%' }}
            />
          </ExerciseInputContainer>
        </ExerciseContainer>
        <div
          style={{
            textAlign: 'center',
            borderBottom: '1px solid white',
            paddingBottom: '2rem',
          }}
        >
          <Button
            variant='success'
            size='lg'
            disabled={isEmpty(name) || isEmpty(sets)}
            onClick={() => {
              props.submitExercise(name, weight, reps, sets, type);
              dispatch({ type: CLEAR });
            }}
          >
            Submit Exercise
          </Button>
        </div>
      </Container>
    </InfoContainer>
  );
}

export { ExerciseSlide };
