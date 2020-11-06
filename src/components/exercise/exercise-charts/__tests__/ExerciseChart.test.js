import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import ExerciseChart from '../ExerciseChart';
import OneRepMaxChart from '../OneRepMaxChart';
import RepsSetsChart from '../RepsSetsChart';
import TonnageChart from '../TonnageChart';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The ExerciseCharts component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <div>
          <ExerciseChart
            inputs={[
              {
                created_at: '2020-07-30T07:24:06.382Z',
                date: '2020-07-30T07:24:06.381Z',
                exercise: '5f227596ede2bf480ab71dce',
                reps: 4,
                sets: 4,
                type: 'kg',
                user: '5f0fa43071291eead235f5a5',
                weight: 110,
                __v: 0,
                _id: '5f227596ede2bf480ab71dcf',
              },
              {
                created_at: '2020-08-03T01:55:11.401Z',
                date: '2020-08-03T01:55:11.401Z',
                exercise: '5f227596ede2bf480ab71dce',
                reps: 4,
                sets: 4,
                type: 'kg',
                user: '5f0fa43071291eead235f5a5',
                weight: 115,
                __v: 0,
                _id: '5f276e7f97aa8f78d1d5caed',
              },
              {
                created_at: '2020-09-11T09:43:42.778Z',
                date: '2020-08-18T14:00:00.000Z',
                exercise: '5f227596ede2bf480ab71dce',
                reps: 1,
                sets: 1,
                type: 'kg',
                user: '5f0fa43071291eead235f5a5',
                weight: 130,
                __v: 0,
                _id: '5f5b46ce4eb003910d5e42e5',
              },
            ]}
          />
        </div>
      </TestRoot>
    );
  });

  it('renders the 1RM chart', () => {
    expect(wrapped.find(OneRepMaxChart).length).toEqual(1);
  });
});
