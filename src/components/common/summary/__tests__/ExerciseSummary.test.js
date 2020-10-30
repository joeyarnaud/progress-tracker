import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import TestRoot from 'TestRoot';
import {
  Relative,
  ContentContainer,
  ModifierContainer,
  Container,
} from '../common';
import { ExerciseSummary } from '../ExerciseSummary';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Exercise Summary component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ExerciseSummary
          date='2020-10-26T01:56:07.348Z'
          inputs={{
            created_at: '2020-10-26T01:56:45.716Z',
            date: '2020-10-26T01:56:45.715Z',
            exercise: '5f962cddf7c0e74bcc32ebd0',
            reps: 5,
            sets: 5,
            type: 'kg',
            user: '5f0fa43071291eead235f5a5',
            weight: 90,
            __v: 0,
            _id: '5f962cddf7c0e74bcc32ebd1',
          }}
          name='Bench Press'
          id='5f962cddf7c0e74bcc32ebd0'
          deleteExercise={() => null}
        />
      </TestRoot>
    );
  });

  it('has the correct link', () => {
    expect(wrapped.find('a').prop('href')).toEqual(
      '/exercise/5f962cddf7c0e74bcc32ebd0'
    );
  });

  it('renders correct workout name and date', () => {
    expect(wrapped.find(ContentContainer).at(0).text()).toEqual(
      'Exercise Name: Bench Press'
    );
    expect(wrapped.find(ContentContainer).at(1).text()).toEqual(
      moment('2020-10-26T01:56:07.348Z').format('DD/MM/yyyy')
    );
  });

  it('renders weight reps and sets', () => {
    expect(wrapped.find(ContentContainer).at(3).text()).toEqual('Weight: 90kg');
    expect(wrapped.find(ContentContainer).at(4).text()).toEqual('Reps: 5');
    expect(wrapped.find(ContentContainer).at(5).text()).toEqual('Sets: 5');
  });
});
