import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FlexBox, FlexBoxBetween } from 'components/common/styled-components';
import { ContentContainer, Container } from './common';
import {
  ExerciseContentContainer,
  ExerciseContainer,
} from './ExerciseContainer';
import { isEmpty } from 'helpers';

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
        {!isEmpty(exercises) &&
          exercises.map((exercise, index) => {
            return (
              <ExerciseContainer
                key={`${index}-${exercise._id}`}
                name={exercise.name}
              />
            );
          })}
      </FlexBox>
    </Container>
  );
}

WorkoutSummary.defaultProps = {
  quickstart: false,
};

WorkoutSummary.propTypes = {
  date: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  quickstart: PropTypes.bool.isRequired,
};

export { WorkoutSummary };
