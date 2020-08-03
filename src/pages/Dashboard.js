import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getWorkouts } from 'actions';
import { QuickStartButton, OptionButton } from 'components/common/buttons';
import { FlexBoxBetween } from 'components/common/styled-components';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <Container>
        <QuickStartButton style={{ marginTop: '20vh' }} to='/quick-start'>
          Quick Start <i className='fas fa-stopwatch'></i>
        </QuickStartButton>
        <FlexBoxBetween style={{ width: '100%' }}>
          <OptionButton to='/workouts'>
            Workouts <i className='fas fa-fire-alt'></i>
          </OptionButton>
          <OptionButton to='/exercises'>
            Exercises <i className='fad fa-dumbbell'></i>
          </OptionButton>
        </FlexBoxBetween>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  workouts: state.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
