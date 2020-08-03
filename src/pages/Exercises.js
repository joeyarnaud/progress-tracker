import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getExercises, deleteExercise, createExercise } from 'actions';
import { TitleContainer, Title2 } from 'components/common/styled-components';
import { ExerciseSummary } from 'components/common/summary';
import { AddExerciseModal } from 'components/common/modals';
import { NoData } from 'components/common/empty';
import { isEmpty } from 'helpers';

const Title = styled(Title2)`
  color: ${(props) => props.theme.colors.colorDark};
`;

class Exercise extends Component {
  componentDidMount() {
    this.props.getExercises();
  }

  render() {
    const { exercises, deleteExercise } = this.props;
    return (
      <Container>
        <TitleContainer>
          <Title>Your Exercises</Title>
          <AddExerciseModal
            action={this.props.createExercise}
            buttonText='Add Exercise'
            size='1.6rem'
          />
        </TitleContainer>

        {!isEmpty(exercises) ? (
          exercises.map((exercise) => {
            return (
              <ExerciseSummary
                date={exercise.date}
                inputs={exercise.inputs[0]}
                name={exercise.name}
                id={exercise._id}
                deleteExercise={deleteExercise}
              />
            );
          })
        ) : (
          <NoData text='No Exercises' />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  exercises: state.exercise.exercises,
});

const mapDispatchToProps = (dispatch) => ({
  getExercises: () => dispatch(getExercises()),
  deleteExercise: (id) => dispatch(deleteExercise(id)),
  createExercise: (name, weight, sets, reps, type, date) =>
    dispatch(createExercise(name, weight, sets, reps, type, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
