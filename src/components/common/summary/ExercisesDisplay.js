import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox } from 'components/common/styled-components';
import {
  ExerciseContentContainer,
  ExerciseContainer,
} from './ExerciseContainer';
import { isEmpty } from 'helpers';

function ExercisesDisplay(props) {
  const { exercises } = props;
  return (
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
  );
}

ExercisesDisplay.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExercisesDisplay;
