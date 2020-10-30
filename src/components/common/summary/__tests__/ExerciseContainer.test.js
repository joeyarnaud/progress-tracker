import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import { ExerciseContainer } from '../ExerciseContainer';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Exercise Container component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ExerciseContainer name='Thing' />
      </TestRoot>
    );
  });

  it('renders the name', () => {
    expect(wrapped.text()).toEqual('Thing');
  });
});
