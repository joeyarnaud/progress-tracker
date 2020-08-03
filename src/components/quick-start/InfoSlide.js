import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import {
  StartButton,
  InfoPageContainer,
  InfoContainer,
  ButtonContainer,
  InfoImportant,
} from 'components/quick-start';
import { WorkoutSummary } from 'components/common/summary';
import { isEmpty } from 'helpers';

const TitleContainer = styled(Form.Group)`
  text-align: left;
`;

const TitleLabel = styled(Form.Label)`
  font-size: 2rem;
`;

const TitleError = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.colorDanger};
`;

const FormControl = styled(Form.Control)`
  font-size: 2rem;
`;

function InfoSlide(props) {
  const {
    startWorkout,
    workoutName,
    changeWorkoutName,
    error,
    workouts,
  } = props;
  return (
    <InfoPageContainer>
      <InfoContainer>
        <InfoImportant>Quick Start Workout</InfoImportant>
        <TitleContainer>
          <TitleLabel>Workout Name *</TitleLabel>
          <FormControl
            value={workoutName}
            onChange={changeWorkoutName}
            placeholder='workout name'
            name='workoutName'
          />
          {!isEmpty(error.workoutName) && (
            <TitleError>{error.workoutName}</TitleError>
          )}
        </TitleContainer>
      </InfoContainer>
      <ButtonContainer>
        <StartButton variant='success' onClick={() => startWorkout()}>
          Start Workout
        </StartButton>
        <StartButton variant='info' href='/dashboard'>
          Back To Dashboard
        </StartButton>
      </ButtonContainer>
      <InfoContainer style={{ marginTop: '4rem' }}>
        <InfoImportant>Unsubmitted Workouts</InfoImportant>
        {!isEmpty(workouts) &&
          workouts.map((workout) => {
            return (
              <WorkoutSummary
                date={workout.date}
                exercises={workout.exercises}
                name={workout.name}
                id={workout._id}
                quickstart={true}
                key={'workout' + workout._id}
              />
            );
          })}
      </InfoContainer>
    </InfoPageContainer>
  );
}

export { InfoSlide };
