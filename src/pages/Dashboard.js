import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getWorkouts } from 'actions';
import { QuickStartButton } from 'components/common/buttons';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <Container>
        <QuickStartButton to='/quick-start'>Quick Start</QuickStartButton>
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
