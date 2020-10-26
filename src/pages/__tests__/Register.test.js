import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TestRoot from 'TestRoot';
import Register from '../Register';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Register component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Register token={{}} />
      </TestRoot>
    );
    // const mock = new MockAdapter(axios);
    // const data = { response: { data: { refreshToken: 'somethign', token: 'something' } } };
    // mock.onPost(`${process.env.REACT_APP_URL_API}/users/register`, { email: "joeyarnaud@gmail.com",
    // name: "Joseph Arnaud",
    // password: "123456" }).reply(200, data);
  });

  it('renders the title', () => {
    expect(wrapped.find('h1').text()).toEqual('Progress Tracker ');
  });

  it('renders four inputs', () => {
    expect(wrapped.find('input').length).toEqual(4);
  });

  it('renders the button', () => {
    expect(wrapped.find('button').text()).toEqual('Sign Up');
  });

  it('full name responds to input', () => {
    expect(wrapped.find('input').at(0).text()).toEqual('');
    wrapped
      .find('input')
      .at(0)
      .simulate('change', {
        target: { name: 'name', value: 'joey arnaud' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(0).prop('value')).toEqual('joey arnaud');
  });

  it('email responds to input', () => {
    expect(wrapped.find('input').at(1).text()).toEqual('');
    wrapped
      .find('input')
      .at(1)
      .simulate('change', {
        target: { name: 'email', value: 'joey@email.com' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(1).prop('value')).toEqual('joey@email.com');
  });

  it('password responds to input', () => {
    expect(wrapped.find('input').at(2).text()).toEqual('');
    wrapped
      .find('input')
      .at(2)
      .simulate('change', {
        target: { name: 'password', value: 'password' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(2).prop('value')).toEqual('password');
  });

  it('confirm password responds to input', () => {
    expect(wrapped.find('input').at(3).text()).toEqual('');
    wrapped
      .find('input')
      .at(3)
      .simulate('change', {
        target: { name: 'passwordConfirm', value: 'password' },
      });
    wrapped.update();
    expect(wrapped.find('input').at(3).prop('value')).toEqual('password');
  });

  it('renders errors', () => {
    wrapped.find('button').simulate('click');
    expect(wrapped.find('p').at(0).text()).toEqual('Please fill in your full name');
    expect(wrapped.find('p').at(1).text()).toEqual('Please use a valid email address');
    expect(wrapped.find('p').at(2).text()).toEqual('Password must be longer than 6 characters');
    expect(wrapped.find('p').at(3).text()).toEqual('Please fill in the confirm password field');
  })

  it('removes correct errors after typing in the name input field', () => {
    wrapped.find('button').simulate('click');
    expect(wrapped.find('p').at(0).text()).toEqual('Please fill in your full name');
    wrapped.find('input').at(0).simulate('change', { target: { name: 'name', value: 'Joseph Arnaud' } });
    expect(wrapped.find('p').at(0).text()).toEqual('');
    
    expect(wrapped.find('p').at(2).text()).toEqual('Password must be longer than 6 characters');
    expect(wrapped.find('p').at(3).text()).toEqual('Please fill in the confirm password field');
  });

  it('removes correct errors after typing in the email input field', () => {
    wrapped.find('button').simulate('click');
    wrapped.find('input').at(1).simulate('change', { target: { name: 'email', value: 'joeyarnaud@gmail.com' } });
    expect(wrapped.find('p').at(1).text()).toEqual('');
    expect(wrapped.find('p').at(0).text()).toEqual('Please fill in your full name');
    expect(wrapped.find('p').at(2).text()).toEqual('Password must be longer than 6 characters');
    expect(wrapped.find('p').at(3).text()).toEqual('Please fill in the confirm password field');
  });

  it('removes correct errors after typing in the password input fields', () => {
    wrapped.find('button').simulate('click');
    wrapped.find('input').at(2).simulate('change', { target: { name: 'password', value: 'password' } });
    wrapped.find('input').at(3).simulate('change', { target: { name: 'passwordConfirm', value: 'password' } });
    expect(wrapped.find('p').at(0).text()).toEqual('Please fill in your full name');
    expect(wrapped.find('p').at(1).text()).toEqual('Please use a valid email address');
    expect(wrapped.find('p').at(2).text()).toEqual('');
    expect(wrapped.find('p').at(3).text()).toEqual('');
  });

  it('renders an error when passwords dont match', () => {
    wrapped.find('input').at(2).simulate('change', { target: { name: 'password', value: 'password' } });
    wrapped.find('input').at(3).simulate('change', { target: { name: 'passwordConfirm', value: 'passworx' } });
    wrapped.find('button').simulate('click');
    expect(wrapped.find('p').at(3).text()).toEqual('Passwords do not match')
  });

  it('renders an error when the password is less than 6 chars', () => {
    wrapped.find('input').at(2).simulate('change', { target: { name: 'password', value: 'pass' } });
    wrapped.find('input').at(3).simulate('change', { target: { name: 'passwordConfirm', value: 'pass' } });
    wrapped.find('button').simulate('click');
    expect(wrapped.find('p').at(2).text()).toEqual('Password must be longer than 6 characters')
  });

  // it('handles requests correctly', () => {
  //   wrapped.find('input').at(0).simulate('change', { target: { name: 'name', value: 'Joseph Arnaud' } });
  //   wrapped.find('input').at(1).simulate('change', { target: { name: 'email', value: 'joeyarnaud@gmail.com' } });
  //   wrapped.find('input').at(2).simulate('change', { target: { name: 'password', value: 'password' } });
  //   wrapped.find('input').at(3).simulate('change', { target: { name: 'passwordConfirm', value: 'password' } });
  //   wrapped.find('button').simulate('click');
  //   console.log(wrapped.text());
  // })
  
  
});
