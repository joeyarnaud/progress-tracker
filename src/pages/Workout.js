import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWorkout } from 'actions';

class Workout extends Component {
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.props.getWorkout(id);
  }

  render() {
    return <div>stuff</div>;
  }
}

const mapStateToProps = (state) => ({
  workout: state.workout,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkout: (id) => dispatch(getWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
