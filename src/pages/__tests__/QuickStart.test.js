import React from 'react';
import { mount } from 'enzyme';
import InfoSlide  from 'components/quick-start/info-slide/InfoSlide';
import TestRoot from 'TestRoot';
import QuickStart from '../QuickStart';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The QuickStart component', () => {
  beforeEach(() => {
    wrapped = mount(
      
        <TestRoot>
          <div id='root'><QuickStart  /></div>
        </TestRoot>
  
    );
  });

  it('renders the infoslide', () => {
    expect(wrapped.find(InfoSlide).length).toEqual(1);
  });

  it('responds to input', () => {
    expect(wrapped.find('input').prop('value')).toEqual('');
    wrapped.find('input').simulate('change', {
      target: { name: 'workoutName', value: 'chest pump' },
    });
    expect(wrapped.find('input').prop('value')).toEqual('chest pump');
  })


});