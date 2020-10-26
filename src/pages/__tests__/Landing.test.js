import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import Landing from '../Landing';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Landing token={{}} />
      </TestRoot>
    );
  });

  it('renders the title', () => {
    expect(wrapped.find('h1').text()).toEqual('Progress Tracker ');
  });

  it('renders two inputs', () => {
    expect(wrapped.find('input').length).toEqual(2);
  });

  it('renders the button', () => {
    expect(wrapped.find('button').text()).toEqual('Sign In');
  });

  it('email responds to input', () => {
    expect(wrapped.find('input').at(0).text()).toEqual('');
    wrapped
      .find('input')
      .at(0)
      .simulate('change', {
        target: { name: 'email', value: 'joey@email.com' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(0).prop('value')).toEqual('joey@email.com');
  });

  it('password responds to input', () => {
    expect(wrapped.find('input').at(1).text()).toEqual('');
    wrapped
      .find('input')
      .at(1)
      .simulate('change', {
        target: { name: 'password', value: 'password' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(1).prop('value')).toEqual('password');
  });
});
