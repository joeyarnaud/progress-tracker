import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { isEmpty }  from 'helpers';
import {
  InfoContainer,
  InfoImportant,
} from 'components/quick-start';

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

function Info(props) {
  const { workoutName, error, changeWorkoutName } = props;
  return (
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
  )
}

export default Info;