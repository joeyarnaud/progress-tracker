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
  padding: 1.5rem;
`;

const Brand = styled(Navbar.Brand)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.colorWhite};
`;

const Link = styled(Nav.Link)`
  margin: 0 2rem;
  color: ${(props) => props.theme.colors.colorWhite};
`;

const Dropdown = styled(NavDropdown)`
  a {
    color: ${(props) => props.theme.colors.colorWhite};
  }
`;

function Navigation(props) {
  const { auth } = props;
  const { tokenInfo } = auth;
  return !isEmpty(tokenInfo) ? (
    <NavContainer collapseOnSelect expand='lg' bg='dark'>
      <Brand to='/dashboard' as={NavLink}>
        Progress Tracker
      </Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/workouts' as={NavLink}>
            <i className='fas fa-fire-alt'></i> Workouts
          </Link>
          <Link to='/exercises' as={NavLink}>
            <i className='fad fa-dumbbell'></i> Exercises
          </Link>
          <Link to='/progress' as={NavLink}>
            <i className='fas fa-chart-line'></i> Progress
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
            bsPrefix='light'
          >
            <NavDropdown.Item
              style={{ color: '#343A40' }}
              onClick={() => props.logoutUser()}
            >
              Logout
            </NavDropdown.Item>
            {
              //   <NavDropdown.Item style={{ color: '#343A40' }}>
              //   Settings
              // </NavDropdown.Item>
            }
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
