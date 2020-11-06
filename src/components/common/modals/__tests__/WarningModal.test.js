import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import { WarningModal, Title } from '../WarningModal';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Warning modal component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <WarningModal
          name='component'
          id='123'
          action={() => null}
          warningText='Do you want to...'
          size={32}
        />
      </TestRoot>
    );
  });

  it('renders the delete button', () => {
    expect(wrapped.find('button').at(0).text()).toEqual(' Do you want to...');
  });

  it('renders the title', () => {
    wrapped.find('button').at(0).simulate('click');
    wrapped.update();
    expect(wrapped.find(Title).text()).toEqual(
      'Are you sure you want to delete component?'
    );
  });
});
