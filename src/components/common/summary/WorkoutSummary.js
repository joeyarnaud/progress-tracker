import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FlexBox, FlexBoxBetween } from 'components/common/styled-components';
import { ContentContainer, Container } from './common';

const ExerciseContentContainer = styled.div`
  font-size: 1.6rem;
  margin-right: 2rem;
  color: ${(props) => props.theme.colors.colorSuccess};
`;

function WorkoutSummary(props) {
  const { date, exercises, name, id, quickstart } = props;
  return (
    <Container
      to={
        quickstart
          ? `/quick-start/workout/${id}?exercise=${exercises.length}`
          : `/workout/${id}`
      }
    >
      <FlexBoxBetween>
        <ContentContainer dark>Workout Name: {name}</ContentContainer>
        <ContentContainer dark>
          {moment(date).format('DD/MM/yyyy')}
        </ContentContainer>
      </FlexBoxBetween>
      <FlexBox>
        <ExerciseContentContainer>Exercises: </ExerciseContentContainer>
        {exercises.map((exercise, index) => {
          return (
            <ExerciseContentContainer key={`exercise-${exercise._id}-${index}`}>
              {exercise.name}
            </ExerciseContentContainer>
          );
        })}
      </FlexBox>
    </Container>
  );
}

WorkoutSummary.defaultProps = {
  quickstart: false,
};

export { WorkoutSummary };
