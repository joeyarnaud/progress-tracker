import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getWorkouts } from 'actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return <Container>dashboard</Container>;
  }
}

const mapStateToProps = (state) => ({
  workouts: state.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
