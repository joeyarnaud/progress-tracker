import React from 'react';
import { Form } from 'react-bootstrap';
import Label from './FormLabel';

export default function InputEmail() {
  return (
    <Form.Group>
      <Label variant='light' text='Email' />
      <Form.Control type='email' placeholder='Email' size='lg' />
    </Form.Group>
  );
}
