import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import Buttons from '../Buttons';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Buttons />
      </TestRoot>
    );
  });

  it('renders both buttons', () => {
    expect(wrapped.find('button').length).toEqual(1);
    expect(wrapped.find('a').length).toEqual(1);
  })

  it('renders the correct text in each button', () => {
    expect(wrapped.find('button').text()).toEqual('Start Workout');
    expect(wrapped.find('a').text()).toEqual('Back To Dashboard');
  })
})