import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import {
  InfoImportant,
} from 'components/quick-start';
import Info from '../Info';


let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Info component with no name', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Info  workoutName='' error={{}} changeWorkoutName={() => null} />
      </TestRoot>
    );
  });

  it('renders the correct labels', () => {
    expect(wrapped.find(InfoImportant).text()).toEqual('Quick Start Workout');
    expect(wrapped.find('label').text()).toEqual('Workout Name *');
  });

  it('does not render text for workout name', () => {
    expect(wrapped.find('input').prop('value')).toEqual('');
  })

  it('does not render an error', () => {
    expect(wrapped.find('p').length).toEqual(0);
  })

})

describe('The Info component with a name', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Info  workoutName='Chest Pump' error={{}} changeWorkoutName={() => null} />
      </TestRoot>
    );
  });

  it('renders the correct labels', () => {
    expect(wrapped.find(InfoImportant).text()).toEqual('Quick Start Workout');
    expect(wrapped.find('label').text()).toEqual('Workout Name *');
  });

  it('does not render text for workout name', () => {
    expect(wrapped.find('input').prop('value')).toEqual('Chest Pump');
  })

  it('does not render an error', () => {
    expect(wrapped.find('p').length).toEqual(0);
  })

})


describe('The Info component with no name and an error', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Info  workoutName='' error={{workoutName: 'Name is required'}} changeWorkoutName={() => null} />
      </TestRoot>
    );
  });

  it('renders the correct labels', () => {
    expect(wrapped.find(InfoImportant).text()).toEqual('Quick Start Workout');
    expect(wrapped.find('label').text()).toEqual('Workout Name *');
  });

  it('does not render text for workout name', () => {
    expect(wrapped.find('input').prop('value')).toEqual('');
  })

  it('does not render an error', () => {
    expect(wrapped.find('p').text()).toEqual('Name is required');
  })

})