import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import { InfoContainer, InfoImportant } from 'components/quick-start';
import { WorkoutSummary } from 'components/common/summary';
import InfoSlide from '../InfoSlide';
import Info from '../Info';
import Buttons from '../Buttons';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The empty InfoSlide component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InfoSlide
          startWorkout={() => null}
          workoutName=''
          changeWorkoutName={() => null}
          error={{}}
          workouts={[]}
        />
      </TestRoot>
    );
  });

  it('renders the Info and buttons and not workout summaries', () => {
    // console.log(wrapped.debug());
    // console.log(wrapped.text());
    expect(wrapped.find(Info).length).toEqual(1);
    expect(wrapped.find(Buttons).length).toEqual(1);
    expect(wrapped.find(InfoContainer).length).toEqual(2);
    expect(wrapped.find(WorkoutSummary).length).toEqual(0);
  });

  it('renders the correct text', () => {
    expect(wrapped.find(InfoImportant).at(1).text()).toEqual(
      'Unsubmitted Workouts'
    );
  });
});

describe('The InfoSlide component with a workout name and some workouts', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InfoSlide
          startWorkout={() => null}
          workoutName='Chest Pump'
          changeWorkoutName={() => null}
          error={{}}
          workouts={[
            {
              date: '2020-10-26T01:56:07.348Z',
              exercises: [
                { _id: '5f962cddf7c0e74bcc32ebd0', name: 'Bench Press' },
              ],
              name: 'Bench Press',
              submitted: false,
              user: '5f0fa43071291eead235f5a5',
              __v: 0,
              _id: '5f962cb7f7c0e74bcc32ebcf',
            },
          ]}
        />
      </TestRoot>
    );
  });

  it('renders the Info and buttons and one workout summaries', () => {
    expect(wrapped.find(Info).length).toEqual(1);
    expect(wrapped.find(Buttons).length).toEqual(1);
    expect(wrapped.find(InfoContainer).length).toEqual(2);
    expect(wrapped.find(WorkoutSummary).length).toEqual(1);
  });

  it('renders the correct text', () => {
    expect(wrapped.find(InfoImportant).at(1).text()).toEqual(
      'Unsubmitted Workouts'
    );
  });

  it('renders the correct workout name', () => {
    expect(wrapped.find('input').prop('value')).toEqual('Chest Pump');
  });
});
