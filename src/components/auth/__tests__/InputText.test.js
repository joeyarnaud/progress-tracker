import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import InputText from '../InputText';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The InputText component with no error and no value', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputText
          handleChange={() => null}
          value=''
          error=''
          name='email'
          type='email'
          placeholder='Email'
          text='Email'
        />
      </TestRoot>
    );
  });

  it('renders the form label', () => {
    expect(wrapped.find('label').text()).toEqual('Email');
  });

  it('does not render an error', () => {
    expect(wrapped.find('p').text()).toEqual('');
  });

  it('has the correct visible input values', () => {
    expect(wrapped.find('input').prop('value')).toEqual('');
    expect(wrapped.find('input').prop('placeholder')).toEqual('Email');
    expect(wrapped.find('input').prop('type')).toEqual('email');
  });

  it('it has the correct accessibility helpers', () => {
    expect(wrapped.find('input').prop('aria-label')).toEqual('email');
    expect(wrapped.find('input').prop('aria-required')).toEqual('true');
    expect(wrapped.find('label').prop('htmlFor')).toEqual('email');
  });
});

describe('The InputText component with an error and value "thing"', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputText
          handleChange={() => null}
          value='thing'
          error='Error'
          name='email'
          type='email'
          placeholder='Email'
          text='Email'
        />
      </TestRoot>
    );
  });

  it('renders the form label', () => {
    expect(wrapped.find('label').text()).toEqual('Email');
  });

  it('does renders the error', () => {
    expect(wrapped.find('p').text()).toEqual('Error');
  });

  it('has the correct visible input values', () => {
    expect(wrapped.find('input').prop('value')).toEqual('thing');
    expect(wrapped.find('input').prop('placeholder')).toEqual('Email');
    expect(wrapped.find('input').prop('type')).toEqual('email');
  });

  it('it has the correct accessibility helpers', () => {
    expect(wrapped.find('input').prop('aria-label')).toEqual('email');
    expect(wrapped.find('input').prop('aria-required')).toEqual('true');
    expect(wrapped.find('label').prop('htmlFor')).toEqual('email');
  });
});

describe('The InputText component with an error and value "thing"', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputText
          handleChange={() => null}
          value='thing'
          error='Error'
          name='password'
          type='password'
          placeholder='Password'
          text='Password'
        />
      </TestRoot>
    );
  });

  it('renders the form label', () => {
    expect(wrapped.find('label').text()).toEqual('Password');
  });

  it('does renders the error', () => {
    expect(wrapped.find('p').text()).toEqual('Error');
  });

  it('has the correct visible input values', () => {
    expect(wrapped.find('input').prop('value')).toEqual('thing');
    expect(wrapped.find('input').prop('placeholder')).toEqual('Password');
    expect(wrapped.find('input').prop('type')).toEqual('password');
  });

  it('it has the correct accessibility helpers', () => {
    expect(wrapped.find('input').prop('aria-label')).toEqual('password');
    expect(wrapped.find('input').prop('aria-required')).toEqual('true');
    expect(wrapped.find('label').prop('htmlFor')).toEqual('password');
  });
});
