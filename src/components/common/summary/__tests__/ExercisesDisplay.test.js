import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import ExercisesDisplay from '../ExercisesDisplay';
import { ExerciseContainer } from '../ExerciseContainer';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ExercisesDisplay exercises={[]} />
      </TestRoot>
    );
  });

  it('renders the title', () => {
    expect(wrapped.find('div').at(1).text()).toEqual('Exercises: ');
  });

  it('doesnt render any exercises', () => {
    expect(wrapped.find(ExerciseContainer).length).toEqual(0);
  });
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ExercisesDisplay
          exercises={[
            {
              date: '2020-10-26T01:56:45.715Z',
              name: 'Bench Press',
              user: '5f0fa43071291eead235f5a5',
              workouts: ['5f962cb7f7c0e74bcc32ebcf'],
              __v: 0,
              _id: '5f962cddf7c0e74bcc32ebd0',
            },
          ]}
        />
      </TestRoot>
    );
  });

  it('renders the title', () => {
    expect(wrapped.find('div').at(1).text()).toEqual('Exercises: ');
  });

  it('renders correct number of exercises', () => {
    expect(wrapped.find(ExerciseContainer).length).toEqual(1);
  });
});
