import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setCurrentUser } from 'actions';
import InputEmail from 'components/auth/InputEmail';
import InputPassword from 'components/auth/InputPassword';
import InputText from 'components/auth/InputText';
import {
  LandingContainer,
  OverlayContainer,
  CenteredContainer,
  Title,
  SubmitButton,
  Center,
  Text,
  ErrorText,
} from 'components/auth/CommonElems';
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

  handleStandardChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

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
          this.props.setCurrentUser(res.data.token);
        })
        .catch((err) => {
          this.setState({ serverError: err.response.data.errors });
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
    const { token } = auth;

    console.log(this.props);
    console.log(token);

    return isEmpty(token) ? (
      <LandingContainer>
        <OverlayContainer>
          <CenteredContainer>
            <Title>Progress Tracker</Title>
            <Form>
              <InputText
                handleChange={this.handleStandardChange}
                value={name}
                error={errors.name}
              />
              <InputEmail
                handleChange={this.handleStandardChange}
                value={email}
                error={errors.email}
              />
              <InputPassword
                handleChange={this.handleStandardChange}
                text='Password'
                name='password'
                value={password}
                error={errors.password}
              />
              <InputPassword
                handleChange={this.handleStandardChange}
                text='Confirm Password'
                name='passwordConfirm'
                value={passwordConfirm}
                error={errors.passwordConfirm}
              />
              {!isEmpty(serverError) && (
                <ErrorText>{serverError[0].msg}</ErrorText>
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

export default connect(mapStateToProps, { setCurrentUser })(Register);
