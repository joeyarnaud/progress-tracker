import React, { useState, useReducer } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
import { FlexBox } from '../styled-components';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
  },
};

const AddButton = styled.button`
  color: ${(props) => props.theme.colors.colorDark};
  background-color: inherit;
  border: none;
  margin-top: 1.5rem;
  margin-right: 2rem;
`;

const InfoContainer = styled.div``;

const ModalExit = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  border: none;
  color: ${(props) => props.theme.colors.colorDanger};
  background: inherit;
  font-size: 2.5rem;
`;

const TITLE_INPUT = 'TITLE_INPUT';
const WEIGHT_INPUT = 'WEIGHT_INPUT';
const REP_INPUT = 'REP_INPUT';
const SET_INPUT = 'SET_INPUT';
const SET_WEIGHT_TYPE = 'SET_WEIGHT_TYPE';
const CHANGE_DATE = 'CHANGE_DATE';
const CLEAR = 'CLEAR';

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
    case SET_WEIGHT_TYPE:
      return { ...state, type: action.payload };
    case CHANGE_DATE:
      return { ...state, date: action.payload };
    case CLEAR:
      return { name: '', weight: '', reps: '', sets: '', type: 'kg' };
    default:
      return state;
  }
};

const AddExerciseModal = (props) => {
  const [isOpen, setModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    weight: '',
    reps: '',
    sets: '',
    type: 'kg',
    date: new Date(),
  });
  const { name, weight, reps, sets, type, date } = state;
  const { id, action, buttonText, size } = props;

  return (
    <React.Fragment>
      <AddButton
        style={{ fontSize: size }}
        onClick={() => setModalVisible(true)}
      >
        <i className='fas fa-plus-circle'></i>
        {' ' + buttonText}
      </AddButton>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModalVisible(false)}
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <InfoContainer>
          <Container>
            <TitleContainer>
              <TitleLabel>Exercise Name *required</TitleLabel>
              <TitleInput
                type='text'
                placeholder='Exercise Name'
                value={name}
                onChange={(e) => {
                  console.log('here');
                  console.log(e.target.value);
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
                  style={{ top: '2rem' }}
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
              <ExerciseInputContainer>
                <Calendar
                  onChange={(date) =>
                    dispatch({ type: CHANGE_DATE, payload: date })
                  }
                  value={date}
                  maxDate={new Date()}
                />
              </ExerciseInputContainer>
            </ExerciseContainer>
            <FlexBox>
              <MarginRight>
                <Button
                  variant='outline-success'
                  size='lg'
                  disabled={isEmpty(name) || isEmpty(sets)}
                  onClick={() => {
                    !isEmpty(id)
                      ? action(id, name, weight, sets, reps, type, date)
                      : action(name, weight, sets, reps, type, date);
                    setModalVisible(false);
                    dispatch({ type: CLEAR });
                  }}
                >
                  Submit
                </Button>
              </MarginRight>
              <Button variant='danger' size='lg'>
                Cancel
              </Button>
            </FlexBox>
          </Container>
          <ModalExit onClick={() => setModalVisible(false)}>
            <i className='fas fa-times-circle'></i>
          </ModalExit>
        </InfoContainer>
      </Modal>
    </React.Fragment>
  );
};

AddExerciseModal.defaultProps = {
  warningText: '',
  size: '1rem',
};

export { AddExerciseModal };
