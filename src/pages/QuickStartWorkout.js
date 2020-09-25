import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import qs from 'query-string';
import {
  StartContainer,
  ExerciseSlide,
  ExerciseSlideView,
  Title,
  OptionsContainer,
  OptionButton,
  QSContainer,
} from 'components/quick-start';
import { addExercise, getWorkout, submitWorkout } from 'actions';
import { isEmpty } from 'helpers';

class QuickStartWorkout extends Component {
  state = {
    currentExercise: 0,
    error: {},
  };

  componentDidMount() {
    const { exercise } = qs.parse(this.props.location.search);
    this.props.getWorkout(this.props.match.params.id);
    this.setState({
      currentExercise: Number(exercise),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { submitted, _id } = nextProps.workout;
    if (this.props.location.search !== nextProps.location.search) {
      const { exercise } = qs.parse(nextProps.location.search);
      console.log(exercise);
      this.setState({
        currentExercise: Number(exercise),
      });
    }
    if (submitted) {
      this.props.history.push(`/workout/${_id}`);
    }
    return true;
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

    return (
      <StartContainer>
        <QSContainer>
          <Title>{name}</Title>
          {!isEmpty(exercises) && currentExercise !== exercises.length ? (
            exercises.map((ex, index) => {
              if (index === currentExercise) {
                return <ExerciseSlideView name={ex.name} {...ex.inputs[0]} />;
              } else {
                return null;
              }
            })
          ) : (
            <ExerciseSlide submitExercise={this.submitExercise} />
          )}

          <OptionsContainer>
            {currentExercise > 0 && (
              <Button
                to={`/quick-start/workout/${_id}?exercise=${
                  currentExercise - 1
                }`}
                as={OptionButton}
                variant='secondary'
              >
                Previous
              </Button>
            )}
            {exercises && currentExercise < exercises.length && (
              <Button
                to={`/quick-start/workout/${_id}?exercise=${
                  currentExercise + 1
                }`}
                as={OptionButton}
                variant='secondary'
              >
                Next
              </Button>
            )}
          </OptionsContainer>
          {exercises && exercises.length > 0 && (
            <OptionsContainer>
              <Button
                onClick={() => this.props.submitWorkout(_id)}
                variant='outline-success'
                style={{
                  marginBottom: '2rem',
                  fontSize: '1.6rem',
                  padding: '0.5rem 2rem',
                }}
              >
                Workout Finished
              </Button>
            </OptionsContainer>
          )}
        </QSContainer>
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
