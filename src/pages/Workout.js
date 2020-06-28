import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment';
import {
  getWorkout,
  deleteExercise,
  deleteWorkout,
  clearWorkout,
  addExercise,
} from 'actions';
import { ExerciseSummary } from 'components/exercise/ExerciseSummary';
import { CustomToggle } from 'components/common/buttons';
import { WarningModal, AddExerciseModal } from 'components/common/modals';

const Title = styled.h2`
  color: ${(props) => props.theme.colors.colorDark};
  margin-top: 2rem;
  font-size: 2rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Workout extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getWorkout(id);
  }

  componentWillUnmount() {
    this.props.clearWorkout();
  }

  render() {
    const { workout } = this.props;
    const { date, exercises, name, _id, deleted } = workout;

    return deleted ? (
      <Redirect to='/workouts' />
    ) : (
      <Container>
        <Flex>
          <Title>{name}</Title>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
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
                  <i className='fas fa-edit'></i> Edit Workout
                </Dropdown.Item>
                <Dropdown.Item eventKey='2'>
                  <AddExerciseModal
                    name={name}
                    id={_id}
                    action={this.props.addExercise}
                    buttonText='Add Exercise'
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Title>{moment(date).format('DD/MM/yyyy')}</Title>
          </div>
        </Flex>
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
  addExercise: (workout_id, name, weight, sets, reps) =>
    dispatch(addExercise(workout_id, name, weight, sets, reps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
