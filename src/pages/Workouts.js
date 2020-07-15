import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getWorkouts, clearWorkout } from 'actions';
import { WorkoutSummary, NoWorkouts } from 'components/workouts/workouts';
import {
  Title2,
  TitleContainer,
  AdderButton,
} from 'components/common/styled-components';
import { isEmpty } from 'helpers';

const Title = styled(Title2)`
  color: ${(props) => props.theme.colors.colorInfo};
`;

class Workouts extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  componentWillUnmount() {
    this.props.clearWorkout();
  }

  render() {
    const { workouts } = this.props.workout;

    return (
      <Container>
        <TitleContainer>
          <Title>Your Workouts</Title>
          <AdderButton to='/workout/create'>
            <i className='fas fa-plus-circle'></i>
          </AdderButton>
        </TitleContainer>

        {!isEmpty(workouts) ? (
          workouts.map((workout) => {
            return (
              <WorkoutSummary
                date={workout.date}
                exercises={workout.exercises}
                name={workout.name}
                id={workout._id}
              />
            );
          })
        ) : (
          <NoWorkouts />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  workout: state.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts()),
  clearWorkout: () => dispatch(clearWorkout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);
