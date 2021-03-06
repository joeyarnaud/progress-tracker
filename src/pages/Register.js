import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setCurrentUser } from 'actions';
import InputText from 'components/auth/InputText';
import {
  LandingContainer,
  OverlayContainer,
  CenteredContainer,
  SubmitButton,
  Center,
  Text,
  ErrorText,
} from 'components/auth/common';
import { Title1 } from 'components/common/styled-components';
import { isEmpty } from 'helpers';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {},
    serverError: [],
  };

  handleStandardChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({ [name]: value, errors: { ...prevState.errors, [name]: '' } }));
  }
    

  handleSubmit = () => {
    const { name, email, password, passwordConfirm } = this.state;
    this.setState({ serverError: [], errors: {} });

    if (this.validate(name, email, password, passwordConfirm)) {
      axios
        .post(`${process.env.REACT_APP_URL_API}/users/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          this.props.setCurrentUser(res.data);
        })
        .catch((err) => {
          if (err.response) {
            this.setState({ serverError: err.response.data.error });
          } else {
            this.setState({ serverError: 'Something Went Wrong, Try Again Later' })
          }
        });
    }
  };

  validate = (name, email, password, passwordConfirm) => {
    let valid = true;
    const errors = {};

    if (isEmpty(name)) {
      errors['name'] = 'Please fill in your full name';
      valid = false;
    }
    if (isEmpty(email)) {
      errors['email'] = 'Please use a valid email address';
      valid = false;
    }
    if (isEmpty(password)) {
      errors['password'] = 'Please fill in the password field';
      valid = false;
    }
    if (isEmpty(passwordConfirm)) {
      errors['passwordConfirm'] = 'Please fill in the confirm password field';
      valid = false;
    }

    if (password.length < 6) {
      errors['password'] = 'Password must be longer than 6 characters';
      valid = false;
    }

    if (password !== passwordConfirm) {
      errors['passwordConfirm'] = 'Passwords do not match';
      valid = false;
    }

    this.setState({ errors });

    return valid;
  };

  render() {
    const {
      name,
      email,
      password,
      passwordConfirm,
      errors,
      serverError,
    } = this.state;

    const { auth } = this.props;
    const { tokenInfo } = auth;

    return isEmpty(tokenInfo) ? (
      <LandingContainer>
        <OverlayContainer>
          <CenteredContainer>
            <Title1 style={{ marginBottom: '2rem' }}>
              Progress Tracker <i className='fas fa-chart-line'></i>
            </Title1>
            <Form>
              <InputText
                handleChange={this.handleStandardChange}
                value={name}
                error={errors.name}
                name='name'
                type='text'
                placeholder='Full Name'
                text='Full Name'
              />
              <InputText
                handleChange={this.handleStandardChange}
                value={email}
                error={errors.email}
                name='email'
                type='email'
                placeholder='Email'
                text='Email'
              />
              <InputText
                handleChange={this.handleStandardChange}
                text='Password'
                name='password'
                value={password}
                error={errors.password}
                type='password'
                placeholder='Password'
              />
              <InputText
                handleChange={this.handleStandardChange}
                text='Confirm Password'
                name='passwordConfirm'
                type='password'
                placeholder='Confirm Password'
                value={passwordConfirm}
                error={errors.passwordConfirm}
              />
              {!isEmpty(serverError) && (
                <ErrorText>{serverError}</ErrorText>
              )}
              <Center>
                <SubmitButton
                  onClick={() => this.handleSubmit()}
                  variant='success'
                >
                  Sign Up
                </SubmitButton>
              </Center>
              <Center>
                <Text to='/'>Already have an account?</Text>
              </Center>
            </Form>
          </CenteredContainer>
        </OverlayContainer>
      </LandingContainer>
    ) : (
      <Redirect to='/dashboard' />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setCurrentUser })(Register);
