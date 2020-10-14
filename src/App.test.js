import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from './App';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The App component', () => {
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App text='Email' />
      </Root>
    );
  });

  it('Renders the form label', () => {});
});
