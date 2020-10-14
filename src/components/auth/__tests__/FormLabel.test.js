import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import FormLabel from '../FormLabel';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The FormLabel component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <div>
          <FormLabel text='Email' htmlFor='email' />
        </div>
      </TestRoot>
    );
  });

  it('Renders the form label', () => {
    expect(wrapped.text()).toEqual('Email');
  });

  it('has the correct accessibility', () => {
    expect(wrapped.find('label').prop('htmlFor')).toEqual('email');
  });
});
