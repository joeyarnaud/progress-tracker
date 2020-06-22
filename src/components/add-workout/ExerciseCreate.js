import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { isEmpty } from 'helpers';
import { ExerciseContainer } from './commonElems';

const ExerciseInputContainer = styled(Form.Group)`
  position: relative;
`;

const ExerciseInputLabel = styled(Form.Label)`
  /* font-size: 1.2rem; */
`;

const ExerciseInput = styled(Form.Control)`
  width: 28rem;
  font-size: 1.6rem;
`;

const TitleContainer = styled(Form.Group)``;

const TitleLabel = styled(Form.Label)`
  /* font-size: 1.4rem; */
`;

const TitleInput = styled(Form.Control)`
  font-size: 1.6rem;
`;

const Container = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const MarginRight = styled.div`
  margin-right: 2rem;
  display: inline;
`;

const Select = styled.select`
  position: absolute;
  top: 3rem;
  right: 0;
  height: 3.2rem;
`;

const TITLE_INPUT = 'TITLE_INPUT';
const WEIGHT_INPUT = 'WEIGHT_INPUT';
const REP_INPUT = 'REP_INPUT';
const SET_INPUT = 'SET_INPUT';
const SET_WEIGHT_TYPE = 'SET_WEIGHT_TYPE';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case TITLE_INPUT:
      return { ...state, title: action.payload };
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
      return { ...state, weightType: action.payload };
    default:
      return state;
  }
};

export function ExerciseCreate(props) {
  const { exercise, handleSubmit, cancelExercise } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...exercise,
    weightType: 'kg',
  });
  const { title, weight, reps, sets, weightType } = state;
  console.log(state);
  return (
    <Container>
      <TitleContainer>
        <TitleLabel>Exercise Name *required</TitleLabel>
        <TitleInput
          type='text'
          placeholder='Exercise Name'
          value={title}
          onChange={(e) =>
            dispatch({ type: TITLE_INPUT, payload: e.target.value })
          }
        />
      </TitleContainer>
      <ExerciseContainer>
        <ExerciseInputContainer>
          <ExerciseInputLabel>Weight</ExerciseInputLabel>
          <ExerciseInput
            type='text'
            placeholder='weight'
            value={weight}
            onChange={(e) =>
              dispatch({ type: WEIGHT_INPUT, payload: e.target.value })
            }
          />
          <Select
            value={weightType}
            onChange={(e) =>
              dispatch({ type: SET_WEIGHT_TYPE, payload: e.target.value })
            }
          >
            <option value='kg'>kg</option>
            <option value='lb'>lb</option>
            <option value='na'>N/A</option>
          </Select>
        </ExerciseInputContainer>
        <ExerciseInputContainer>
          <ExerciseInputLabel>Reps</ExerciseInputLabel>
          <ExerciseInput
            type='text'
            placeholder='reps'
            value={reps}
            onChange={(e) =>
              dispatch({ type: REP_INPUT, payload: e.target.value })
            }
          />
        </ExerciseInputContainer>
        <ExerciseInputContainer>
          <ExerciseInputLabel>Sets *required</ExerciseInputLabel>
          <ExerciseInput
            type='text'
            placeholder='sets'
            value={sets}
            onChange={(e) =>
              dispatch({ type: SET_INPUT, payload: e.target.value })
            }
          />
        </ExerciseInputContainer>
      </ExerciseContainer>
      <MarginRight>
        <Button
          variant='outline-success'
          size='lg'
          disabled={isEmpty(title) || isEmpty(sets)}
          onClick={() =>
            handleSubmit({
              title,
              weight,
              reps,
              sets,
              weightType: weightType,
              submitted: true,
            })
          }
        >
          Submit
        </Button>
      </MarginRight>

      <Button variant='danger' size='lg' onClick={() => cancelExercise()}>
        Cancel
      </Button>
    </Container>
  );
}
