import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Dropdown, Button } from 'react-bootstrap';
import moment from 'moment';
import {
  getWorkout,
  deleteExercise,
  deleteWorkout,
  clearWorkout,
  addExercise,
  changeName,
} from 'actions';
import {
  TitleContainer,
  TitleInput,
} from 'components/workouts/add-workout/commonElems';
import { Title4, FlexBoxBetween } from 'components/common/styled-components';
import { ExerciseSummary } from 'components/exercise/ExerciseSummary';
import { CustomToggle, BlankButton } from 'components/common/buttons';
import { WarningModal, AddExerciseModal } from 'components/common/modals';
import { isEmpty } from 'helpers';

class Workout extends Component {
  state = {
    edit: false,
    title: '',
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getWorkout(id);
  }

  componentWillUnmount() {
    this.props.clearWorkout();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEmpty(nextProps.workout) && isEmpty(this.props.workout)) {
      console.log('here');
      this.setState({ title: nextProps.workout.name });
    }
    return true;
  }

  changeWorkoutName = (e) => {
    this.props.changeName(this.state.title, this.props.workout._id);
    this.setState({ edit: false });
  };

  toggleNameEdit = () =>
    this.setState((prevState) => ({ edit: !prevState.edit }));

  handleStandardChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { workout } = this.props;
    const { date, exercises, name, _id, deleted } = workout;
    const { edit, title } = this.state;

    return deleted ? (
      <Redirect to='/workouts' />
    ) : (
      <Container>
        <FlexBoxBetween>
          {edit ? (
            <TitleContainer style={{ display: 'flex', marginTop: '1rem' }}>
              <TitleInput
                type='text'
                placeholder='Workout Name'
                name='title'
                value={title}
                onChange={this.handleStandardChange}
              />
              <Button onClick={this.changeWorkoutName} variant='success'>
                Submit
              </Button>
            </TitleContainer>
          ) : (
            <Title4>{name}</Title4>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <AddExerciseModal
              name={name}
              id={_id}
              action={this.props.addExercise}
              buttonText='Add Exercise'
              size='1.6rem'
            />
            <Dropdown style={{ display: 'inherit', marginRight: '3rem' }}>
              <Dropdown.Toggle
                as={CustomToggle}
                id='workout-options'
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey='1'>
                  <WarningModal
                    name={name}
                    id={_id}
                    action={this.props.deleteWorkout}
                    warningText='Delete Workout'
                    size='1rem'
                  />
                </Dropdown.Item>
                <Dropdown.Item eventKey='2'>
                  <BlankButton onClick={this.toggleNameEdit}>
                    <i className='fas fa-edit'></i> Change Name
                  </BlankButton>
                </Dropdown.Item>
                <Dropdown.Item eventKey='2'></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Title4>{moment(date).format('DD/MM/yyyy')}</Title4>
          </div>
        </FlexBoxBetween>
        <Container>
          {exercises &&
            exercises.map((exercise) => {
              return (
                <ExerciseSummary
                  date={exercise.date}
                  inputs={exercise.inputs[0]}
                  name={exercise.name}
                  id={exercise._id}
                  deleteExercise={this.props.deleteExercise}
                />
              );
            })}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  workout: state.workout.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkout: (id) => dispatch(getWorkout(id)),
  deleteExercise: (id) => dispatch(deleteExercise(id)),
  clearWorkout: () => dispatch(clearWorkout()),
  deleteWorkout: (id) => dispatch(deleteWorkout(id)),
  addExercise: (workout_id, name, weight, sets, reps, type, date) =>
    dispatch(addExercise(workout_id, name, weight, sets, reps, type, date)),
  changeName: (name, id) => dispatch(changeName(name, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
