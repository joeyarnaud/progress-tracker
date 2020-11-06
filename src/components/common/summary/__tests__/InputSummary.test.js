import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import moment from 'moment';
import {
  Relative,
  ContentContainer,
  ModifierContainer,
  Container,
} from '../common';
import { InputSummary } from '../InputSummary';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The InputSummary component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputSummary
          date='2020-10-26T01:56:07.348Z'
          reps={5}
          sets={5}
          type='kg'
          weight={90}
          name='Bench Press'
          id='5f962cddf7c0e74bcc32ebd1'
          deleteInput={() => null}
        />
      </TestRoot>
    );
  });

  it('renders the date correctly', () => {
    expect(wrapped.find(ContentContainer).at(0).text()).toEqual(
      moment('2020-10-26T01:56:07.348Z').format('DD/MM/yyyy')
    );
  });

  it('renders the correct weight, sets and reps', () => {
    expect(wrapped.find(ContentContainer).at(1).text()).toEqual('Weight: 90kg');
    expect(wrapped.find(ContentContainer).at(2).text()).toEqual('Reps: 5');
    expect(wrapped.find(ContentContainer).at(3).text()).toEqual('Sets: 5');
  });

  it('renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });
});
