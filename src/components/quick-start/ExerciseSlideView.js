import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
  ExerciseContainer,
  TitleContainer,
  TitleLabel,
  ExerciseInputContainer,
  ExerciseInputLabel,
} from 'components/workouts/add-workout';
import { ExerciseInputText, TitleText } from './common';

const InfoContainer = styled.div`
  padding-top: 2rem;
`;

const SeparatedExerciseContainer = styled(ExerciseInputContainer)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorWhite};
`;

const SeparatedTitleContainer = styled(TitleContainer)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorWhite};
`;

function ExerciseSlideView(props) {
  const { name, weight, reps, sets, type } = props;

  return (
    <InfoContainer>
      <Container>
        <SeparatedTitleContainer>
          <TitleLabel>Name:</TitleLabel>
          <TitleText>{name}</TitleText>
        </SeparatedTitleContainer>
        <ExerciseContainer>
          <SeparatedExerciseContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Weight:</ExerciseInputLabel>
            <ExerciseInputText>
              {weight}
              {type}
            </ExerciseInputText>
          </SeparatedExerciseContainer>
          <SeparatedExerciseContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Reps:</ExerciseInputLabel>
            <ExerciseInputText>{reps}</ExerciseInputText>
          </SeparatedExerciseContainer>
          <SeparatedExerciseContainer style={{ width: '100%' }}>
            <ExerciseInputLabel>Sets:</ExerciseInputLabel>
            <ExerciseInputText>{sets}</ExerciseInputText>
          </SeparatedExerciseContainer>
        </ExerciseContainer>
      </Container>
    </InfoContainer>
  );
}

ExerciseSlideView.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  sets: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export { ExerciseSlideView };
