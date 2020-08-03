import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import {
  StartContainer,
  ExerciseSlidePlay,
  Title,
  WorkoutFinished,
  QSContainer,
} from 'components/quick-start';
import { getWorkout, addInput } from 'actions';
import { isEmpty } from 'helpers';

class PlayWorkout extends Component {
  state = {
    currentExercise: 0,
    error: {},
    submittedExercises: [],
  };

  componentDidMount() {
    const { exercise } = qs.parse(this.props.location.search);
    this.props.getWorkout(this.props.match.params.id);
    this.setState({
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

  addInput = (id, input) => {
    const { currentExercise } = this.state;
    const { _id } = this.props.workout;
    this.props.addInput(id, input);
    this.setState((prevState) => ({
      submittedExercises: [...prevState.submittedExercises, currentExercise],
    }));
    this.props.history.push(
      `/workout/play/${_id}?exercise=${currentExercise + 1}`
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
                return (
                  <ExerciseSlidePlay
                    name={ex.name}
                    id={ex._id}
                    submitExercise={this.addInput}
                    {...ex.inputs[ex.inputs.length - 1]}
                  />
                );
              }
            })
          ) : (
            <WorkoutFinished id={_id} />
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
  addInput: (id, input) => dispatch(addInput(id, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayWorkout);
