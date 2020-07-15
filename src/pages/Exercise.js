import React, { Component } from 'react';
import { Container, Dropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import {
  getExercise,
  deleteInput,
  addInput,
  deleteExercise,
  clearExercise,
  changeExerciseName,
} from 'actions';
import { isEmpty } from 'helpers';
import {
  TitleContainer,
  TitleInput,
} from 'components/workouts/add-workout/commonElems';
import ExerciseChart from 'components/exercise/exercise-charts/ExerciseChart';
import { Title4, FlexBoxBetween } from 'components/common/styled-components';
import { CustomToggle, BlankButton } from 'components/common/buttons';
import { InputSummary } from 'components/exercise/InputSummary';
import { WarningModal, AddInputModal } from 'components/common/modals';

class Exercise extends Component {
  state = {
    edit: false,
    title: '',
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getExercise(id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      !isEmpty(nextProps.exercise.exercise) &&
      isEmpty(this.props.exercise.exercise)
    ) {
      console.log('here');
      this.setState({ title: nextProps.exercise.exercise.name });
    }
    return true;
  }

  componentWillUnmount() {
    this.props.clearExercise();
  }

  changeExerciseName = (e) => {
    this.props.changeName(this.state.title, this.props.exercise.exercise._id);
    this.setState({ edit: false });
  };

  toggleNameEdit = () =>
    this.setState((prevState) => ({ edit: !prevState.edit }));

  handleStandardChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { exercise } = this.props;
    const { date, inputs, name, workouts, _id, deleted } = exercise.exercise;
    const { edit, title } = this.state;

    return deleted ? (
      <Redirect to='/' />
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
              <Button
                style={{ marginLeft: '1rem' }}
                onClick={this.changeExerciseName}
                variant='success'
              >
                Submit
              </Button>
              <Button
                style={{ marginLeft: '1rem' }}
                variant='secondary'
                onClick={this.toggleNameEdit}
              >
                Cancel
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
            <AddInputModal
              name={name}
              id={_id}
              action={this.props.addInput}
              buttonText='Add Input'
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
                    action={this.props.deleteExercise}
                    warningText='Delete Exercise'
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
        <ExerciseChart inputs={inputs} />
        {!isEmpty(inputs) &&
          inputs.map((input) => {
            return (
              <InputSummary
                date={input.date}
                reps={input.reps}
                sets={input.sets}
                type={input.type}
                weight={input.weight}
                deleteInput={() => this.props.deleteInput(_id, input._id)}
                id={input._id}
                key={'input-summary-' + input._id}
              />
            );
          })}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  exercise: state.exercise,
});

const mapDispatchToProps = (dispatch) => ({
  getExercise: (id) => dispatch(getExercise(id)),
  deleteInput: (id, input_id) => dispatch(deleteInput(id, input_id)),
  addInput: (id, input) => dispatch(addInput(id, input)),
  deleteExercise: (id) => dispatch(deleteExercise(id)),
  clearExercise: () => dispatch(clearExercise()),
  changeName: (title, id) => dispatch(changeExerciseName(title, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
