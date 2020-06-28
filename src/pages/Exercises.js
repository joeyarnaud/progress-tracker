import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getExercises, deleteExercise } from 'actions';
import {
  TitleContainer,
  Title2,
  AdderButton,
} from 'components/common/styled-components';
import { ExerciseSummary } from 'components/exercise/ExerciseSummary';

const Title = styled(Title2)`
  color: ${(props) => props.theme.colors.colorInfo};
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
          <AdderButton to='/exercise/create'>
            <i className='fas fa-plus-circle'></i>
          </AdderButton>
        </TitleContainer>

        {exercises &&
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
          })}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
