import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isEmpty } from 'helpers';
import {
  ExerciseContainer,
  TitleContainer,
  TitleLabel,
  TitleInput,
  Container,
  ExerciseInputContainer,
  ExerciseInput,
  ExerciseInputLabel,
  Select,
  MarginRight,
} from './commonElems';

const TITLE_INPUT = 'TITLE_INPUT';
const WEIGHT_INPUT = 'WEIGHT_INPUT';
const REP_INPUT = 'REP_INPUT';
const SET_INPUT = 'SET_INPUT';
const CHANGE_DATE = 'CHANGE_DATE';
const SET_WEIGHT_TYPE = 'SET_WEIGHT_TYPE';

const reducer = (state, action) => {
  console.log(action);
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
    case CHANGE_DATE:
      return { ...state, date: action.payload };
    case SET_WEIGHT_TYPE:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export function ExerciseCreate(props) {
  const { exercise, handleSubmit, cancelExercise } = props;
  const [state, dispatch] = useReducer(reducer, {
    ...exercise,
    type: 'kg',
    date: new Date(),
  });
  const { name, weight, reps, sets, type, date } = state;
  console.log(state);
  return (
    <Container>
      <TitleContainer>
        <TitleLabel>Exercise Name *required</TitleLabel>
        <TitleInput
          type='text'
          placeholder='Exercise Name'
          value={name}
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
            value={type}
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
        <ExerciseInputContainer>
          <Calendar
            onChange={(date) => dispatch({ type: CHANGE_DATE, payload: date })}
            value={date}
            maxDate={new Date()}
          />
        </ExerciseInputContainer>
      </ExerciseContainer>
      <MarginRight>
        <Button
          variant='outline-success'
          size='lg'
          disabled={isEmpty(name) || isEmpty(sets)}
          onClick={() =>
            handleSubmit({
              name,
              weight,
              reps,
              sets,
              type: type,
              submitted: true,
              date,
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
