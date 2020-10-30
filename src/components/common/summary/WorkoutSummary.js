import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FlexBoxBetween } from 'components/common/styled-components';
import { ContentContainer, Container } from './common';
import ExercisesDisplay from './ExercisesDisplay';

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
      <ExercisesDisplay exercises={exercises} />
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
