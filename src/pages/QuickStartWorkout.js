import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import {
  StartContainer,
  ExerciseSlide,
  ExerciseSlideView,
  Title,
  OptionsContainer,
  OptionButton,
} from 'components/quick-start';
import { addExercise, getWorkout, submitWorkout } from 'actions';
import { isEmpty } from 'helpers';

class QuickStartWorkout extends Component {
  state = {
    currentExercise: 0,
    unblock: null,
    error: {},
  };

  componentDidMount() {
    const { exercise } = qs.parse(this.props.location.search);
    this.props.getWorkout(this.props.match.params.id);
    this.setState({
      // unblock: this.props.history.block(
      //   'Exit Workout? The current page has unsaved changes'
      // ),
      currentExercise: Number(exercise),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.search !== nextProps.location.search) {
      const { exercise } = qs.parse(nextProps.location.search);
      console.log(exercise);
      this.setState({
        currentExercise: Number(exercise),
      });
    }
    return true;
  }

  componentWillUnmount() {
    // if (this.state.unblock) {
    //   this.state.unblock();
    // }
  }

  handleStandardChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  submitExercise = (name, weight, reps, sets, type) => {
    this.props.addExercise(
      this.props.match.params.id,
      name,
      weight,
      reps,
      sets,
      type
    );
  };

  render() {
    const { currentExercise } = this.state;
    const { name, exercises, _id } = this.props.workout;
    console.log(this.props);
    console.log(this.state);

    return (
      <StartContainer>
        <Title>{name}</Title>
        {!isEmpty(exercises) && currentExercise !== exercises.length ? (
          exercises.map((ex, index) => {
            if (index === currentExercise) {
              return <ExerciseSlideView name={ex.name} {...ex.inputs[0]} />;
            }
          })
        ) : (
          <ExerciseSlide submitExercise={this.submitExercise} />
        )}

        <OptionsContainer>
          {currentExercise > 0 && (
            <OptionButton
              to={`/quick-start/workout/${_id}?exercise=${currentExercise - 1}`}
              as={Link}
              variant='secondary'
            >
              Previous
            </OptionButton>
          )}
          {exercises && currentExercise < exercises.length && (
            <OptionButton
              to={`/quick-start/workout/${_id}?exercise=${currentExercise + 1}`}
              as={Link}
              variant='secondary'
            >
              Next
            </OptionButton>
          )}
        </OptionsContainer>
        {exercises && exercises.length > 0 && (
          <OptionsContainer>
            <OptionButton
              onClick={() => this.props.submitWorkout(_id)}
              variant='success'
            >
              Workout Finished
            </OptionButton>
          </OptionsContainer>
        )}
      </StartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  quickstart: state.quickstart,
  workout: state.workout.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkout: (id) => dispatch(getWorkout(id)),
  addExercise: (workout_id, name, weight, sets, reps, type, date) =>
    dispatch(addExercise(workout_id, name, weight, sets, reps, type, date)),
  submitWorkout: (id) => dispatch(submitWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickStartWorkout);
