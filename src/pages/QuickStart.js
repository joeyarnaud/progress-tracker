import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InfoSlide, StartContainer } from 'components/quick-start';
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
    // unblock: null,
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
        <InfoSlide
          startWorkout={this.startWorkout}
          workoutName={workoutName}
          changeWorkoutName={this.handleStandardChange}
          error={error}
          workouts={unfinishedWorkouts}
        />
      </StartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  quickstart: state.quickstart,
});

const mapDispatchToProps = (dispatch) => ({
  createExercise: (name, weight, sets, reps, type, date) =>
    dispatch(createExercise(name, weight, sets, reps, type, date)),
  addExercise: (workout_id, name, weight, sets, reps, type, date) =>
    dispatch(addExercise(workout_id, name, weight, sets, reps, type, date)),
  postWorkout: (name, exercises) => dispatch(postWorkout(name, exercises)),
  getUnsubmittedWorkouts: () => dispatch(getUnsubmittedWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickStart);
