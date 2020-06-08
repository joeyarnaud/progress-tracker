import React from 'react';
import { Form } from 'react-bootstrap';
import InputEmail from '../components/auth/InputEmail';
import InputPassword from '../components/auth/InputPassword';
import {
  LandingContainer,
  OverlayContainer,
  CenteredContainer,
  Title,
  SubmitButton,
  Center,
  Text,
} from '../components/auth/CommonElems';

export default function Register() {
  return (
    <LandingContainer>
      <OverlayContainer>
        <CenteredContainer>
          <Title>Progress Tracker</Title>
          <Form>
            <InputEmail />
            <InputPassword text='Password' />
            <InputPassword text='Confirm Password' />
            <Center>
              <SubmitButton variant='success'>Sign In</SubmitButton>
            </Center>
            <Center>
              <Text to='/'>Already have an account?</Text>
            </Center>
          </Form>
        </CenteredContainer>
      </OverlayContainer>
    </LandingContainer>
  );
}
