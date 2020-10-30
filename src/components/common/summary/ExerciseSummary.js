import React from 'react';
import moment from 'moment';
import { FlexBoxBetween } from 'components/common/styled-components';
import { WarningModal } from 'components/common/modals';
import {
  Relative,
  ContentContainer,
  ModifierContainer,
  Container,
} from './common';

function ExerciseSummary(props) {
  const { date, inputs, name, id, deleteExercise } = props;
  return (
    <Relative>
      <Container to={`/exercise/${id}`}>
        <FlexBoxBetween>
          <ContentContainer dark>Exercise Name: {name}</ContentContainer>
          <ContentContainer dark>
            {moment(date).format('DD/MM/yyyy')}
          </ContentContainer>
        </FlexBoxBetween>
        <FlexBoxBetween style={{ marginTop: '1rem' }}>
          <ContentContainer>Last Input</ContentContainer>
          <ContentContainer>Weight: {inputs.weight}kg</ContentContainer>
          <ContentContainer>Reps: {inputs.reps}</ContentContainer>
          <ContentContainer>Sets: {inputs.sets}</ContentContainer>
        </FlexBoxBetween>
      </Container>
      <ModifierContainer>
        <WarningModal name={name} id={id} action={deleteExercise} />
      </ModifierContainer>
    </Relative>
  );
}

export { ExerciseSummary };
