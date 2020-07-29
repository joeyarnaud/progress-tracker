import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FlexBox, FlexBoxBetween } from 'components/common/styled-components';

const Container = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.colorInfo};
  height: 7rem;
  padding: 1rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

const ContentContainer = styled.div`
  font-size: 1.6rem;
`;

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
        <ContentContainer>Workout Name: {name}</ContentContainer>
        <ContentContainer>{moment(date).format('DD/MM/yyyy')}</ContentContainer>
      </FlexBoxBetween>
      <FlexBox>
        <ExerciseContentContainer>Exercises: </ExerciseContentContainer>
        {exercises.map((exercise) => {
          return (
            <ExerciseContentContainer>{exercise.name}</ExerciseContentContainer>
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
