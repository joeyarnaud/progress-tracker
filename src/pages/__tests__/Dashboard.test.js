import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import Dashboard from '../Dashboard';
import { Container } from 'react-bootstrap';
import { QuickStartButton, OptionButton } from 'components/common/buttons';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Dashboard />
      </TestRoot>
    );
  });

  it('renders correct components', () => {
    expect(wrapped.find(Container).length).toEqual(1);
    expect(wrapped.find(QuickStartButton).length).toEqual(1);
    expect(wrapped.find(OptionButton).length).toEqual(2);
  })
})