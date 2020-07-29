import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
  ExerciseContainer,
  TitleContainer,
  TitleLabel,
  ExerciseInputContainer,
  ExerciseInputLabel,
} from 'components/workouts/add-workout';

const InfoContainer = styled.div`
  padding-top: 2rem;
`;
function ExerciseSlideView(props) {
  const { name, weight, reps, sets, type } = props;
  console.log(props);

  return (
    <InfoContainer>
      <Container>
        <TitleContainer>
          <TitleLabel>Exercise Name</TitleLabel>
          <TitleLabel>{name}</TitleLabel>
        </TitleContainer>
        <ExerciseContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Weight</ExerciseInputLabel>
            <ExerciseInputLabel>
              {weight}
              {type}
            </ExerciseInputLabel>
          </ExerciseInputContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Reps</ExerciseInputLabel>
            <ExerciseInputLabel>{reps}</ExerciseInputLabel>
          </ExerciseInputContainer>
          <ExerciseInputContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Sets</ExerciseInputLabel>
            <ExerciseInputLabel>{sets}</ExerciseInputLabel>
          </ExerciseInputContainer>
        </ExerciseContainer>
      </Container>
    </InfoContainer>
  );
}

export { ExerciseSlideView };
