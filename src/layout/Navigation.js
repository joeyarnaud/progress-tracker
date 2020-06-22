import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { logoutUser } from 'actions';
import { isEmpty } from 'helpers';

const NavContainer = styled(Navbar)`
  font-size: 1.6rem;
  box-shadow: 0 0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1);
`;

const Brand = styled(Navbar.Brand)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.colorSuccess};
`;

const Link = styled(Nav.Link)`
  margin: 0 2rem;
  color: ${(props) => props.theme.colors.colorSuccess};
`;

const Dropdown = styled(NavDropdown)`
  a {
    color: ${(props) => props.theme.colors.colorSuccess};
  }
`;

function Navigation(props) {
  const { auth } = props;
  const { token, tokenInfo } = auth;
  return !isEmpty(token) ? (
    <NavContainer collapseOnSelect expand='lg' bg='light'>
      <Brand to='/dashboard' as={NavLink}>
        Progress Tracker
      </Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/add-workout' as={NavLink}>
            <i className='fas fa-plus-circle'></i> Add Workout
          </Link>
          <Link to='/view-workout' as={NavLink}>
            <i className='fad fa-dumbbell'></i> View Exercises
          </Link>
          <Link to='/update-progress' as={NavLink}>
            <i className='fad fa-dumbbell'></i> Update Progress
          </Link>
          <Link to='/view-progress' as={NavLink}>
            <i className='fas fa-chart-line'></i> View Progress
          </Link>
        </Nav>
        <Nav>
          <Dropdown
            title={
              <React.Fragment>
                <i className='fas fa-user'></i> {tokenInfo.user.name}
              </React.Fragment>
            }
            id='collasible-nav-dropdown'
            bsPrefix='success'
          >
            <NavDropdown.Item onClick={() => props.logoutUser()}>
              Logout
            </NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </NavContainer>
  ) : (
    <Redirect to='/' />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
