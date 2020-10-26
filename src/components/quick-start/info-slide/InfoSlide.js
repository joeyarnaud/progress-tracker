import React from 'react';
import PropTypes from 'prop-types';
import {
  InfoPageContainer,
  InfoContainer,
  InfoImportant,
} from 'components/quick-start';
import { WorkoutSummary } from 'components/common/summary';
import { isEmpty } from 'helpers';
import Info from './Info';
import Buttons from './Buttons';

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
      <Info workoutName={workoutName} error={error} changeWorkoutName={changeWorkoutName} />
      <Buttons startWorkout={startWorkout} />
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

InfoSlide.propTypes = {
  startWorkout: PropTypes.func.isRequired,
  workoutName: PropTypes.string.isRequired,
  changeWorkoutName: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  workouts: PropTypes.array.isRequired,
}

export default InfoSlide;
