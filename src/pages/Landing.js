import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputEmail from 'components/auth/InputEmail';
import InputPassword from 'components/auth/InputPassword';
import {
  LandingContainer,
  OverlayContainer,
  CenteredContainer,
  Title,
  SubmitButton,
  Center,
  Text,
} from 'components/auth/CommonElems';
import { setCurrentUser } from 'actions';
import { isEmpty } from 'helpers';

const Landing = (props) => {
  const { token } = props;
  return isEmpty(token) ? (
    <LandingContainer>
      <OverlayContainer>
        <CenteredContainer>
          <Title>Progress Tracker</Title>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!values.password) {
                errors.password = 'Required';
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 2000);

              axios
                .post(`${process.env.REACT_APP_URL_API}/auth/login`, {
                  email: values.email,
                  password: values.password,
                })
                .then((res) => {
                  props.setCurrentUser(res.data.token);
                })
                .catch((err) => {});
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <InputEmail
                  handleChange={handleChange}
                  value={values.email}
                  error={errors.email}
                />
                <InputPassword
                  handleChange={handleChange}
                  text='Password'
                  name='password'
                  value={values.password}
                  error={errors.password}
                />
                <Center>
                  <SubmitButton
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    variant='success'
                  >
                    Sign In
                  </SubmitButton>
                </Center>
                <Center>
                  <Text to='/register'>Don't have an account?</Text>
                </Center>
              </Form>
            )}
          </Formik>
        </CenteredContainer>
      </OverlayContainer>
    </LandingContainer>
  ) : (
    <Redirect to='/dashboard' />
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { setCurrentUser })(Landing);
