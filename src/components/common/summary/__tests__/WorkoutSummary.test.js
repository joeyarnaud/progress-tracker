import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import TestRoot from 'TestRoot';
import { WorkoutSummary } from '../WorkoutSummary';
import {
  ExerciseContentContainer,
  ExerciseContainer,
} from '../ExerciseContainer';
import { ContentContainer, Container } from '../common';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The WorkoutSummary component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <WorkoutSummary
          date='2020-10-26T01:56:07.348Z'
          exercises={[
            {
              date: '2020-10-26T01:56:45.715Z',
              inputs: ['5f962cddf7c0e74bcc32ebd1'],
              name: 'Bench Press',
              user: '5f0fa43071291eead235f5a5',
              workouts: ['5f962cb7f7c0e74bcc32ebcf'],
              __v: 0,
              _id: '5f962cddf7c0e74bcc32ebd0',
            },
          ]}
          name='Bench Press'
          id='5f962cb7f7c0e74bcc32ebcf'
        />
      </TestRoot>
    );
  });

  it('renders workout name', () => {
    expect(wrapped.find(ContentContainer).at(0).text()).toEqual(
      'Workout Name: Bench Press'
    );
  });

  it('renders the correct date', () => {
    expect(wrapped.find(ContentContainer).at(1).text()).toEqual(
      moment('2020-10-26T01:56:45.715Z').format('DD/MM/yyyy')
    );
  });

  it('renders the exercises', () => {
    expect(wrapped.find(ExerciseContentContainer).length).toEqual(2);
  });

  it('renders the correct exercise text', () => {
    expect(wrapped.find(ExerciseContainer).text()).toEqual('Bench Press');
  });

  it('has the correct link', () => {
    expect(wrapped.find(Container).prop('to')).toEqual(
      '/workout/5f962cb7f7c0e74bcc32ebcf'
    );
  });
});

describe('The WorkoutSummary component quickstart', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <WorkoutSummary
          date='2020-10-26T01:56:07.348Z'
          exercises={[
            {
              date: '2020-10-26T01:56:45.715Z',
              inputs: ['5f962cddf7c0e74bcc32ebd1'],
              name: 'Bench Press',
              user: '5f0fa43071291eead235f5a5',
              workouts: ['5f962cb7f7c0e74bcc32ebcf'],
              __v: 0,
              _id: '5f962cddf7c0e74bcc32ebd0',
            },
          ]}
          name='Bench Press'
          id='5f962cb7f7c0e74bcc32ebcf'
          quickstart
        />
      </TestRoot>
    );
  });

  it('renders workout name', () => {
    expect(wrapped.find(ContentContainer).at(0).text()).toEqual(
      'Workout Name: Bench Press'
    );
  });

  it('renders the correct date', () => {
    expect(wrapped.find(ContentContainer).at(1).text()).toEqual(
      moment('2020-10-26T01:56:45.715Z').format('DD/MM/yyyy')
    );
  });

  it('renders the exercises', () => {
    expect(wrapped.find(ExerciseContentContainer).length).toEqual(2);
  });

  it('renders the correct exercise text', () => {
    expect(wrapped.find(ExerciseContainer).text()).toEqual('Bench Press');
  });

  it('has the correct link', () => {
    expect(wrapped.find(Container).prop('to')).toEqual(
      '/quick-start/workout/5f962cb7f7c0e74bcc32ebcf?exercise=1'
    );
  });
});
