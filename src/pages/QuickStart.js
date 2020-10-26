import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StartContainer, QSContainer } from 'components/quick-start';
import InfoSlide from 'components/quick-start/info-slide/InfoSlide';
import {
  createExercise,
  addExercise,
  postWorkout,
  getUnsubmittedWorkouts,
} from 'actions';
import { isEmpty } from 'helpers';

class QuickStart extends Component {
  state = {
    workoutName: '',
    error: {},
  };

  componentDidMount() {
    this.props.getUnsubmittedWorkouts();
  }

  handleStandardChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  startWorkout = () => {
    if (!isEmpty(this.state.workoutName)) {
      this.props.postWorkout(this.state.workoutName, []).then((res) => {
        this.props.history.push(
          `/quick-start/workout/${res.payload._id}?exercise=${res.payload.exercises.length}`
        );
      });
    } else {
      this.setState((prevState) => ({
        error: { ...prevState.error, workoutName: 'name needed' },
      }));
    }
  };

  render() {
    const { workoutName, error } = this.state;
    const { unfinishedWorkouts } = this.props.quickstart;

    return (
      <StartContainer>
        <QSContainer>
          <InfoSlide
            startWorkout={this.startWorkout}
            workoutName={workoutName}
            changeWorkoutName={this.handleStandardChange}
            error={error}
            workouts={unfinishedWorkouts}
          />
        </QSContainer>
      </StartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  quickstart: state.quickstart,
});

QuickStart.propTypes = {
  quickstart: PropTypes.shape({ workout: PropTypes.object.isRequired,
    unfinishedWorkouts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired, }).isRequired
}

const mapDispatchToProps = (dispatch) => ({
  createExercise: (name, weight, sets, reps, type, date) =>
    dispatch(createExercise(name, weight, sets, reps, type, date)),
  addExercise: (workout_id, name, weight, sets, reps, type, date) =>
    dispatch(addExercise(workout_id, name, weight, sets, reps, type, date)),
  postWorkout: (name, exercises) => dispatch(postWorkout(name, exercises)),
  getUnsubmittedWorkouts: () => dispatch(getUnsubmittedWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickStart);
