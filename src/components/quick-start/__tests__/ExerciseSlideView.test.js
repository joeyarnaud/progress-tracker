import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import {
  ExerciseContainer,
  TitleContainer,
  TitleLabel,
  ExerciseInputContainer,
  ExerciseInputLabel,
} from 'components/workouts/add-workout';
import { ExerciseSlideView } from '../ExerciseSlideView';
import { TitleText, ExerciseInputText } from '../common';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The ExerciseSlideView component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ExerciseSlideView
          name='Bench Press'
          weight={90}
          reps={8}
          sets={4}
          type='kg'
        />
      </TestRoot>
    );
  });

  it('renders the name', () => {
    expect(wrapped.find(TitleText).text()).toEqual('Bench Press');
  });

  it('renders the correct weight and type', () => {
    expect(wrapped.find(ExerciseInputText).at(0).text()).toEqual('90kg');
  });

  it('renders the correct reps', () => {
    expect(wrapped.find(ExerciseInputText).at(1).text()).toEqual('8');
  });

  it('renders the correct sets', () => {
    expect(wrapped.find(ExerciseInputText).at(2).text()).toEqual('4');
  });
});
