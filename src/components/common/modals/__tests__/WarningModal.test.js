import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import WarningModal from '../WarningModal';

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
});
