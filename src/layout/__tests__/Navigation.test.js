import React from 'react';
import { mount } from 'enzyme';
import { Redirect, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import TestRoot from 'TestRoot';
import Navigation from '../Navigation';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

describe('The Landing component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot initialState={{ auth: { tokenInfo: { user: { name: 'Joseph' }  } } }}>
        <Navigation />
      </TestRoot>
    );
  });

  it('renders all of the navlinks', () => {
    expect(wrapped.find(NavLink).length).toEqual(3);
  });

  it('renders the brand text', () => {
    expect(wrapped.find('a').at(0).text()).toEqual('Progress Tracker')
  })

  it('renders the dropdown', () => {
    expect(wrapped.find(NavDropdown).length).toEqual(1);
  })

  it('responds correctly to the dropdown being pressed', () => {
    expect(wrapped.find('a.dropdown-toggle').length).toEqual(1);
    expect(wrapped.find('div.dropdown').length).toEqual(1);
    wrapped.find('a.dropdown-toggle').simulate('click');
    expect(wrapped.find('div.dropdown.show').length).toEqual(1);
  })
})